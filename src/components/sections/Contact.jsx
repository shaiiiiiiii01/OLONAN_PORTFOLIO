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
  const [status, setStatus] = useState(null); // 'invalid' | 'sent' | null

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));
  const a11y = (key, id) => ({
    className: errors[key] ? 'bad' : undefined,
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${id}-err` : undefined,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const clean = { name: values.name.trim(), email: values.email.trim(), message: values.message.trim() };
    const found = validate(clean);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus('invalid');
      return;
    }
    setStatus('sent');
    const subject = encodeURIComponent(`Portfolio message from ${clean.name}`);
    const body = encodeURIComponent(`${clean.message}\n\n— ${clean.name} (${clean.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

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
      <div><button className="btn" type="submit">Send message</button></div>
      <div id="stt" role="status" aria-live="polite">
        {status === 'invalid' && <p style={{ background: 'var(--p2)' }}>Some fields need your attention. Fix them and send again.</p>}
        {status === 'sent' && (
          <p style={{ background: 'var(--p1)' }}>
            Opening your email app with the message ready to send. If nothing opens, write to {SITE.email}.
          </p>
        )}
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
