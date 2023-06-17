import { createContext, useState, useEffect } from 'react';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const theme_context = createContext(null);

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') // Muuttaa teeman mätsäämään käyttäjän käyttämää teemaa
  );

  const toggle_theme = () => {
    setTheme((curr) => {
      const newTheme = curr === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => { // Teema ei vaihdu jos päivittää sivun
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <theme_context.Provider value={{ theme, toggle_theme }}>
      <div className="App" data-theme={theme}>
        <Navbar />
        <Hero />
        <Timeline />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </theme_context.Provider>
  );
}

export default App;