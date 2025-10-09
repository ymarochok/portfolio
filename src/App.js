import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home_page/home';
import Footer from './components/footer/Footer';
import Projects_page from './components/projects_page/Projects_page';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>

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
