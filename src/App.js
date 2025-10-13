import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home_page/home';
import Footer from './components/footer/Footer';
import Projects_page from './components/projects_page/Projects_page';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from 'react';

function App() {

  useEffect(() => {
        
        const ids = ["main", "skills", "app"];
        const elements = ids
            .map(id => document.getElementById(id))
            .filter(Boolean); 

        function handleMove(e) {
            const { innerWidth, innerHeight } = window;
            const moveX = (e.clientX - innerWidth / 2) / innerWidth * 20;
            const moveY = (e.clientY - innerHeight / 2) / innerHeight * 20;

            for (const el of elements) {
            el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            el.style.transition = "transform 0.1s ease-out";
            }
        }

        document.addEventListener("mousemove", handleMove);
        return () => document.removeEventListener("mousemove", handleMove);
    }, []);

  return (
    <div className='app' id='app'>

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/projects" element={<Projects_page />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>

    
    </div>
  );
}

export default App;
