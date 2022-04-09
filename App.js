import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer';
import {Login} from './components/Login';
import {Registration} from './components/Registration';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="/bejelentkezes" element={<Login />} />
            <Route path="/regisztracio" element={<Registration />} />
          </Routes>
       <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
