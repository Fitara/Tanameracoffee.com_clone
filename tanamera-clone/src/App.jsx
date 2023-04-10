import { useState } from 'react'
import Navbar from './components/Navbar'
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
      <div className='mt-10 text-center'>
        <h1 className='text-5xl'>Welcome to Tanamera</h1>
        <button />
      </div>
    </>
  )
}
