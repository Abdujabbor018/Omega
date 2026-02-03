import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Section from './Components/Section/Section'
import Info from './Components/Info/Info'
import Design from './Components/Design/Design'
import Review from './Components/Review/Review'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <>
    <Navbar />  
    <Header />
    <Hero />
    <Section />
    <Info />
    <Design />
    <Review />
    <Contact /> 
    </>
    )
}

export default App