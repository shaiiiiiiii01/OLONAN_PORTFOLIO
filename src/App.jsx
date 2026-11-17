import { useCallback, useEffect, useState } from 'react';
import { LoaderProvider } from './context/LoaderContext';
import { ReplayContext } from './context/SectionContext';
import useActiveSection from './hooks/useActiveSection';
import useHashRoute from './hooks/useHashRoute';
import { SECTION_IDS, SITE } from './data/site';
import { prefersReducedMotion } from './utils/motion';
import Background from './components/layout/Background';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Loader from './components/layout/Loader';
import ScrollProgress from './components/layout/ScrollProgress';
import SectionCounter from './components/layout/SectionCounter';
import TechMarquee from './components/common/TechMarquee';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import Now from './components/sections/Now';
import Contact from './components/sections/Contact';
import NotFound from './components/sections/NotFound';

export default function App() {
  const notFound = useHashRoute(SECTION_IDS);
  const active = useActiveSection(SECTION_IDS);
  const [replays, setReplays] = useState({});

  // Opening a section from the navbar/logo replays its entrance animations.
  const replay = useCallback((id) => {
    if (prefersReducedMotion) return;
    setReplays((r) => ({ ...r, [id]: (r[id] || 0) + 1 }));
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is404', notFound);
    document.title = notFound ? SITE.notFoundTitle : SITE.title;
  }, [notFound]);

  // Refreshing or opening a link like /#contact lands on that section.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (SECTION_IDS.includes(id)) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return (
    <LoaderProvider>
      <ReplayContext.Provider value={replays}>
        <ScrollProgress />
        <Loader />
        <Background />
        <Header active={active} onNavigate={replay} />
        {notFound && <NotFound />}
        <div id="site">
          <SectionCounter active={active} />
          <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Now />
            <TechMarquee className="bt" />
            <Contact />
          </main>
          <Footer />
        </div>
      </ReplayContext.Provider>
    </LoaderProvider>
  );
}
