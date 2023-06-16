import React from 'react'
import Navbar from './Navbar'
import './index.css';
import {Routes , Route} from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <p>Welcome To</p>
        <h2>Navbar Website Home Page</h2>
      </section>
    </>
  );
};
const About = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <p>Welcome To</p>
        <h2>Navbar Website About Page</h2>
      </section>
    </>
  );
};
const Services = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <p>Welcome To</p>
        <h2>Navbar Website Services Page</h2>
      </section>
    </>
  );
};
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <p>Welcome To</p>
        <h2>Navbar Website Contact Page</h2>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path= "/" element = {<Home/>}></Route>
      <Route path= "/about" element = {<About/>}></Route>
      <Route path= "/service" element = {<Services/>}></Route>
      <Route path= "/contact" element = {<Contact/>}></Route>
    </Routes>
  )
}

export default App;