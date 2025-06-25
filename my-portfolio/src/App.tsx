import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Feed from './pages/Feed';
import Projects from './pages/Projects';
import About from './pages/About';

const tabs = ['feed', 'projects', 'about'] as const;
type Tab = typeof tabs[number];

function App() {
  const [tab, setTab] = useState<Tab>('feed');

  return (
    <div className="app-container" style={{ padding: 24 }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{ padding: '0.5rem 1rem', background: tab === t ? 'white' : 'transparent', color: tab === t ? 'black' : 'white', border: '1px solid white' }}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

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
          {tab === 'about' && <About />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;