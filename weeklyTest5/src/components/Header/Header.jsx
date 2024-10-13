import React,{useState} from 'react'
import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom';


function Header() {
    const navigate=useNavigate();
    const [search,setSearch]=useState();
    const searchSubmit=(event)=>{
        event.preventDefault(); 
        navigate(`/search/${search}`); 
    }
   
  return (
    <div className={styles.header}>
      <Link to='/' style={{textDecoration:'none' ,color:'black'}}><h3 >Geek Gallery</h3></Link>
      <div >
        <form action="" onSubmit={searchSubmit} className={styles.inputSeach}>
        <input type="text" placeholder='Search' onChange={(e)=>{setSearch(e.target.value)}}/>
      <button>Search</button>
      </form></div>
      
    </div>
  )
}

export default Header
