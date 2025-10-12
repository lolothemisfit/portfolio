import { useState } from 'react'
import NavBar from "./components/NavBar";
import Hero from "./components/Hero"; 
import About from "./components/About";
import './App.css'
import Experience from './components/Experience';

function App() {

  return (
    <>
      <div>
        <NavBar />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
      </div>
    </>
  )
}

export default App
