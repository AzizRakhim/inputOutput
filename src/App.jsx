import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Button from './components/Main/Buttons/Button';
import Counter from './components/Hero/Counter/Counter';
import Slider from './components/Hero/Slider/Slider';
import Carousel from './components/Main/Carousel/Carousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <section id='hero' className='hero'>
        <Header />
        <div className='container'>
          <div className='hero__whole-container d-flex align-items-center'>
            <Slider />
            <Counter />
          </div>
        </div>
      </section>
      <Button />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
