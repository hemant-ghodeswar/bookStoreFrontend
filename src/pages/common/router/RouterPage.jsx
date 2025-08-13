import React from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Home from '../../component/home/Home';
import Course from '../../component/course/Course';
import Navbar from '../../component/Navbar';
import Footer from '../footer/Footer';
import Signup from '../../component/signup/Signup';

const RouterPage = () => {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/signup";
  return (

 <>
     {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
     {!hideNavbarAndFooter && <Footer />}
    
    </>
  )
}

export default RouterPage
