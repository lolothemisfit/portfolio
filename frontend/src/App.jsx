import { useState } from 'react'
import NavBar from "./components/NavBar";
import Hero from "./components/Hero"; 
import About from "./components/About";
import './App.css'
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills  from './components/Skills';  
import Projects from './components/Projects';
import Work from './components/Work';

function App() {

  return (
    <>
      <div>
        <NavBar />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contributions"><Work /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  )
}

export default App
