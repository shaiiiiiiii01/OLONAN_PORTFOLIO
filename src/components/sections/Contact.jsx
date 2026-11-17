import { useState } from 'react';
import Section from '../common/Section';
import Reveal from '../common/Reveal';
import SectionTag from '../common/SectionTag';
import { SITE } from '../../data/site';

const EMAIL_RE = /^\S+@\S+\.\S+$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name) errors.name = 'Enter your name.';
  if (!email) errors.email = 'Enter your email address.';
  else if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address, like name@example.com.';
  if (message.length < 10) errors.message = 'Write a message of at least 10 characters.';
  return errors;
}

function Field({ id, name, label, error, children }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="err" id={`${id}-err`}>{error}</p>}
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'invalid' | 'sending' | 'sent' | 'failed' | 'mailto' | null

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));
  const a11y = (key, id) => ({
    className: errors[key] ? 'bad' : undefined,
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${id}-err` : undefined,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    const botcheck = e.currentTarget.elements.botcheck?.checked;
    const clean = { name: values.name.trim(), email: values.email.trim(), message: values.message.trim() };
    const found = validate(clean);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus('invalid');
      return;
    }
    if (botcheck) return; // hidden honeypot field: only bots tick it

    // No form key configured yet: open the visitor's email app instead.
    if (!SITE.formAccessKey) {
      const subject = encodeURIComponent(`Portfolio message from ${clean.name}`);
      const body = encodeURIComponent(`${clean.message}\n\n— ${clean.name} (${clean.email})`);
      setStatus('mailto');
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: SITE.formAccessKey,
          subject: `Portfolio message from ${clean.name}`,
          from_name: 'Portfolio contact form',
          name: clean.name,
          email: clean.email,
          message: clean.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Send failed');
      setValues({ name: '', email: '', message: '' });
      setStatus('sent');
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('failed');
    }
  };

  const messages = {
    invalid: ['var(--p2)', 'Some fields need your attention. Fix them and send again.'],
    sending: ['var(--p1)', 'Sending your message…'],
    sent: ['var(--p1)', 'Message sent! Thank you, I’ll get back to you soon.'],
    failed: ['var(--p2)', `Your message couldn’t be sent. Check your connection and try again, or email ${SITE.email}.`],
    mailto: ['var(--p1)', `Opening your email app with the message ready to send. If nothing opens, write to ${SITE.email}.`],
  };
  const [bg, text] = messages[status] || [];

  return (
    <Reveal as="form" id="f" delay={0.15} noValidate onSubmit={onSubmit}>
      <Field id="n" label="Your name" error={errors.name}>
        <input id="n" autoComplete="name" value={values.name} onChange={set('name')} {...a11y('name', 'n')} />
      </Field>
      <Field id="e" label="Your email" error={errors.email}>
        <input id="e" type="email" autoComplete="email" value={values.email} onChange={set('email')} {...a11y('email', 'e')} />
      </Field>
      <Field id="m" label="Message" error={errors.message}>
        <textarea id="m" rows={5} value={values.message} onChange={set('message')} {...a11y('message', 'm')} />
      </Field>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
      <div>
        <button className="btn" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </div>
      <div id="stt" role="status" aria-live="polite">
        {text && <p style={{ background: bg }}>{text}</p>}
      </div>
    </Reveal>
  );
}

export default function Contact() {
  return (
    <Section id="contact">
      <div className="wrap">
        <SectionTag>07 · Get in touch</SectionTag>
        <div className="two">
          <div>
            <Reveal as="h2">Have something <em>in mind</em>?</Reveal>
            <Reveal as="p" delay={0.1} style={{ margin: '20px 0 28px' }}>
              I’d love to hear from you! Whether it’s a project idea, collaboration, or opportunity to learn and grow, feel free to send me a message. I’m always open to connecting with new people.
            </Reveal>
            <Reveal as="a" className="big" href={`mailto:${SITE.email}`} delay={0.2}>{SITE.email}</Reveal>
            <Reveal className="soc" delay={0.3}>
              {SITE.socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
              ))}
            </Reveal>
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
