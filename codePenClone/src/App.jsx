import { useEffect, useState } from 'react'
import './App.css'
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import { Home, NewProject } from './container/index'
import { auth, db } from './config/firbaseConfig'
import { getRedirectResult } from 'firebase/auth'
import { collection, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { Loader } from './component'
import { useDispatch } from 'react-redux'
import { setProject, setUser } from './store/slice/codepenslice'

function App() {
  const [loader, setLoader] = useState(true)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((userCred)=>{
      if(userCred){
        console.log(userCred);
        
        console.log(userCred?.providerData[0]);
        setDoc(doc(db,'users',userCred?.uid),userCred?.providerData[0])
        .then(()=>{
          dispatch(setUser(userCred?.providerData[0]));
          navigate("/projects", {replace:true});
        })
        
      }
      else{
        navigate("/auth", {replace:true});
      }
      setLoader(false);
    });

    return ()=> unsubscribe();
  }, []);

  useEffect(()=>{
    console.log("enterd Project Query");
    
    const projectQuery=query(
      collection(db,"Projects"),
      orderBy("id", "desc")
    );

    const unsubscribe=onSnapshot(projectQuery,(querySnaps)=>{
      const projectList=querySnaps.docs.map((doc)=>doc.data());
      dispatch(setProject(projectList));
    })

    return ()=> unsubscribe();
  },[])
  

  return (
    loader?<div className='w-screen h-screen flex items-center justify-center '>
      <Loader/>
    </div> :
    <Routes>
     <Route path='/*' element={<Home />}/>
     <Route path='/newProject' element={<NewProject/>}/>
     <Route path='*' element={ <Navigate to={'/'}/>}/>
     </Routes> 
   
  )
}

export default App
