import { Outlet } from "react-router-dom";
import React from 'react'
import Header from "./Header/Header.jsx";
import Footer from "./Footer";
import { useEffect } from "react";
import { useContext } from "react";
import { blogContext } from "../context/context";
import {useNavigate} from 'react-router-dom'

function Layout() {
  const ctx=useContext(blogContext);
  console.log(ctx);
  
  const navigate=useNavigate();

  useEffect(()=>{
    if(!ctx.state.user.accessToken){
      navigate('/login');
    }
  },[])
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
