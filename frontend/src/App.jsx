import { useState } from 'react'
import NavBar from "./components/NavBar";
import Hero from "./components/Hero"; 
import About from "./components/About";
import './App.css'
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <div>
        <NavBar />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  )
}

export default App
