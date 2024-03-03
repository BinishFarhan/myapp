import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './Home';
import { About } from './About';
import Contact from './Contact';
import './App.css'
import { MyContext } from './MyContext';







function App() {
  const [name, setName] = useState("Binish")
  return (
    <>
      <MyContext.Provider value={name}>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>

    </>


  );
}

export default App;

// when trasnsfer data from A component to print in d comp passing the props from a to b to c to d is called react prop drilling.
//
