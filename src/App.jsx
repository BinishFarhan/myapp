import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyCard from './MyCard';

function App() {
  const [name , setName] = useState("Binish")
  return (
    <MyCard name={name}/>



  );
}

export default App;
