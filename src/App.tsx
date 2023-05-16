import React from 'react';
import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';
import { MyProjects } from './myProjects/MyProjects';
import { Contacts } from './contacts/Contacts';
import { Footer } from './footer/Footer';
import { Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/skills'} element={<Skills />} />
      </Routes> */}


      <Header />
      <Main />
      <Skills />
      <MyProjects />
      <Contacts />
      <Footer />


    </div>
  );
}

export default App
