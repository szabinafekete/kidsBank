import React from 'react'
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import {Header} from './components/Header';
import {HeaderMain} from './components/HeaderMain';
import {Main} from './components/main/Main';
import {Footer} from './components/Footer';
import {Login} from './components/main/Login';
import {Registration} from './components/main/Registration';
import {Home} from './components/admin/Home';
import {Family} from './components/admin/Family';
import {Todo} from './components/admin/Todo';
import {Notes} from './components/admin/Notes';
import { Points } from './components/admin/Points';
import { Bank } from './components/admin/Bank';

function App() {

  axios.defaults.baseURL = 'https://kidsbankproject-server.herokuapp.com';

  return (
    <div className="app">
      <BrowserRouter>
      {/*Header*/}
        <Routes>
            <Route path="/" element={<HeaderMain />} />
            <Route path="/bejelentkezes" element={<HeaderMain />} />
            <Route path="/regisztracio" element={<HeaderMain />} />
            <Route path="/admin/" element={<Header />} />
            <Route path="/admin/csaladtagok" element={<Header />} />
            <Route path="/admin/feladatlista" element={<Header />} />
            <Route path="/admin/heti-megbeszeles" element={<Header/>} />
            <Route path="/admin/pontbevaltas" element={<Header/>} />
            <Route path="/admin/bank" element={<Header/>} />
        </Routes>
        {/*Main*/}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bejelentkezes" element={<Login />} />
          <Route path="/regisztracio" element={<Registration />} />
          <Route path="/admin/" element={<Home />} />
          <Route path="/admin/csaladtagok" element={<Family />} />
          <Route path="/admin/feladatlista" element={<Todo />} />
          <Route path="/admin/heti-megbeszeles" element={<Notes/>} />
          <Route path="/admin/pontbevaltas" element={<Points/>} />
          <Route path="/admin/bank" element={<Bank/>} />
        </Routes>
        {/*Footer*/}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
