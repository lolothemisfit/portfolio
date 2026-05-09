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
import Footer from './components/Footer';
import Counters from './components/Counter';
import Education from './components/Education';


function App() {

  return (
    <>
      <div>
        <NavBar />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="counters"><Counters /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contributions"><Work /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div>
    </>
  )
}

export default App
