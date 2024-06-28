import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = (props) => {
  return (
    <div>
    <Header />
        <main style={{minHeight:'88.5vh'}}>
            {props.children}
        </main>
    
    <ToastContainer />
    <Footer />
    </div>
  )
}

export default Layout