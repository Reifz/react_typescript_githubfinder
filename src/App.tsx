import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import classes from './App.module.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className={classes.App}>
      <h1>GitHub Finder</h1>
      <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
