import React, { useState } from 'react';
import { Brand, CTA, Navbar } from './Components';
import { Footer, Header, Possibility, Features, WhatGPT3, Blog } from './container';
import './App.scss';
// import './index.scss';

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
