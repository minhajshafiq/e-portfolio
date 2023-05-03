import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';

import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Projects from './pages/projects/projects.jsx';
import Contact from './pages/contact/contact.jsx';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);