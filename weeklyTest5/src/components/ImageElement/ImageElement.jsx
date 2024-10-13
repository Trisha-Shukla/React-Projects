import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import styles from './ImageElement.module.css'

function ImageElement() {
    const {id}=useParams();
    console.log(id);
    
    const [photo, setPhoto] = useState(null);
  const [loader, setLoader] = useState(false);

    useEffect(()=>{
        async function fetchPhtos(){
            setLoader(true)
            try{
                const response=await axios.get(`https://api.unsplash.com/photos/${id}`,{
                    headers:{
                        Authorization:`Client-ID 5gV13aJ4UUOPwcPNpkm9yInVrT1YZ_qfp3Fso-Cyc_0`
                    }
                })
                setPhoto(response.data);

            }
            catch(error){
                console.error(error)
            }
            finally{
                setLoader(false)
            }
        }
        fetchPhtos();
    },[id])
    if(loader) return <div>Loading...</div>
    if(!photo) return <div>Photos Not Found</div>
  return (
    <div className={styles.imageElementContainer}>
        <div className={styles.imageBox}>
      <img src={photo.urls.regular} alt={photo.alt_description} style={{ width: '100%' , height:'100%' }} />
      </div>
      <div style={{display: 'flex',
    flexDirection: 'column',
    gap: '10px'}}>
      <h2>{photo.user.name}</h2>
      <p>{photo.description || photo.alt_description}</p>
      <p>Created on: {new Date(photo.created_at).toLocaleDateString()}</p>
      <p>Location: {photo.location?.name || 'Unknown'}</p>

      </div>
    </div>
  )
}

export default ImageElement
