import { useState } from 'react'
import Login from './components/Login'
import Search from './components/Search'
import Sidebar from './components/Sidebar'
import Products from './components/Products'
import Categories from './components/Categories'
import FormProduct from './components/FormProduct'
import Registration from './components/Registration'
import {
  BrowserRouter as Router,
  Routes,
  Route, } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <>
      <Search />
      <Login />
      <Sidebar />
      <Products />
      <Categories />
      <FormProduct />
      <Registration />
    </>
  )
}