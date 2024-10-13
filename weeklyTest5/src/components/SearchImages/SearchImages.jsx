import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './Search.module.css'
import axios from 'axios';

function SearchImages() {
    const {searchQuery}=useParams();
    console.log(searchQuery);
    
    const [page, setPage] = useState(1);
    const [ready, setReady] = useState(false);
    const [photos, setPhotos] = useState([]);
    // const [query, setQuery] = useState(null);
  const [loader, setLoader] = useState(false);

    useEffect(()=>{
        async function fetchPhtos(){
            setLoader(true)
            try{
                const response=await axios.get(`https://api.unsplash.com/search/photos`,{
                    headers:{
                        Authorization:`Client-ID 5gV13aJ4UUOPwcPNpkm9yInVrT1YZ_qfp3Fso-Cyc_0`
                    },
                    params:{
                        page: page,
                        query: searchQuery, 
                    }
                    
                })
                console.log('res');
                
                console.log(response.data.results);
                
                setPhotos((prev)=> [...prev,...response.data.results]);
                setReady(true)

            }
            catch(error){
                console.error(error)
            }
            finally{
                setLoader(false)
            }
        }
        fetchPhtos();
    },[page,searchQuery])

    const handleScroll=()=>{
        if(window.scrollY + window.innerHeight>= document.body.offsetHeight-100 && ready && !loader ){
            setReady(false)
            setPage((prev)=> prev+1)
            
        }
      }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
       return ()=>{window.removeEventListener('scroll',handleScroll);}
      },[ready,loader])

  return (
    <>
     <div className={styles.searchContainer}>
      {photos.map((photo,index)=>{
        // console.log(photo.id);
        
        return (
            <Link key={`photo${index}${photo.id}`} to={`/photo/${photo.id}/`} style={{textDecoration:'none', color:'white'}}>
          <div style={{backgroundImage:`url(${photo.urls.small})`,borderRadius:'15px',border:'2px solid black' , height: '300px', width: '300px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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

export default SearchImages
