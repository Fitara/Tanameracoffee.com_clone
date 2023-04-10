import { useState } from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import './App.css'

function button() {
  return (
    <button className='bg-white'>Ini button</button>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Carousel />
    </>
  )
}
