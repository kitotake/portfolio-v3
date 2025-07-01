import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { Analytics } from "@vercel/analytics/react"; 

function App() {
  return (
      <div className="App">
            <Header />
                  <main>
                          <Hero />
                                  <About />
                                          <Skills />
                                                  <Projects />
                                                          <Contact />
                                                                </main>
                                                                      {/* Ajout du tracking Vercel */}
                                                                            <Analytics />
                                                                                </div>
                                                                                  );
                                                                                  }

                                                                                  export default App;