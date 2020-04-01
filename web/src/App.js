import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './routes'


import './global.css'

function App() {

 return (
   <>
    <Routes />
    <ToastContainer autoClose={5000}/>
  </>
  );
}

export default App