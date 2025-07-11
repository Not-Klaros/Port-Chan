import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Feed from './pages/Feed';
import Projects from './pages/Projects';
import About from './pages/Resume';

const tabs = ['feed', 'projects', 'resume'] as const;
type Tab = typeof tabs[number];

function App() {
  const [tab, setTab] = useState<Tab>('feed');

  useEffect(() => {
    const applyAnimation = () => {
      document.querySelectorAll<HTMLElement>('.glitch').forEach((el) => {
        el.style.animation = 'none';
        // force reflow to reset the animation
        void el.offsetWidth;
        el.style.animation = 'glitch-text 2s';
      });
    };

    applyAnimation();
    const interval = setInterval(applyAnimation, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <div className="nav-buttons">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="tab-button glitch"
            style={{ background: tab === t ? 'white' : 'transparent', color: tab === t ? 'black' : 'white' }}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {tab === 'feed' && <Feed />}
            {tab === 'projects' && <Projects />}
            {tab === 'resume' && <About />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;