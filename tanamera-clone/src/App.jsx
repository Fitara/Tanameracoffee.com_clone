import { useState } from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Card from './components/Card'
import Footer from './components/Footer'
import Detail from './components/Detail'

import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Card />
      <Footer />
      <Detail />
    </>
  )
}
