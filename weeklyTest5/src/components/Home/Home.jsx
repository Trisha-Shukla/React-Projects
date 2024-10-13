import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import styles from './Home.module.css'

function Home() {

    const [page, setPage] = useState(1);
    const [ready, setReady] = useState(false);
  const [photoGalery, setPhotoGalery] = useState([]);
  const [loader, setLoader] = useState(false);
  async function fetchPhotos(){
    setLoader(true);
    try{
      const response= await axios.get('https://api.unsplash.com/photos',{
        headers:{
          Authorization:`Client-ID 5gV13aJ4UUOPwcPNpkm9yInVrT1YZ_qfp3Fso-Cyc_0`
        },
        params:{
          page:page
        },
      });
      console.log(response.data);
      setPhotoGalery((prev)=> [...prev,...response.data])
      setReady(true);

    }catch(error){
      console.error(error);
      
    }
    finally{
      setLoader(false)
    }
     

  }

  const handleScroll=()=>{
    if(window.scrollY + window.innerHeight>= document.body.offsetHeight-100 && ready && !loader ){
        setReady(false)
        setPage((prev)=> prev+1)
        
    }
  }
  useEffect(()=>{
  fetchPhotos();
  },[page])

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
   return ()=>{window.removeEventListener('scroll',handleScroll);}
  },[ready,loader])
  return (
    <>
     <div className={styles.container}>
      {photoGalery.map((photo,index)=>{
        console.log(photo.id);
        
        return (
            <Link key={`photo${index}${photo.id}`} to={`/photo/${photo.id}/`} style={{textDecoration:'none', color:'white'}}>
          <div style={{backgroundImage:`url(${photo.urls.small})`,padding:'10px',borderRadius:'15px',border:'2px solid black' ,height: '300px', width: '300px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2>{photo.user.name}</h2>
            <div>{photo.description}</div>
            <div>{photo.created_at}</div>

          </div>
          </Link>
        )
      })}
    </div>
      {loader && ( <div>
        Loading...
      </div> )} 
      
      
    </>
  )
}

export default Home
