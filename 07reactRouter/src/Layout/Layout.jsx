import {useState,useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer/>
        </>
    )
}

export default Layout;