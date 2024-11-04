import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { fireStore } from '../../config/config';

function BlogList() {
  const blogCollectionRef=collection(fireStore, 'blogs');
  const [dbData,setDbData]=useState([])

  useEffect(()=>{
    async function fetchData(){
      try {
        const dbBlogList= await getDocs(blogCollectionRef);
        console.log(dbBlogList.docs[0].data());
        const list=dbBlogList.docs.map((doc)=>( {...doc.data(),id: doc.id}));
        setDbData(list);
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[])
  
  return (
    <div>
      <h1>Blog List Screen</h1>
      <div>
        {dbData.map((data)=> <div key={data.id}>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div> )}
      </div>
    </div>
  )
}

export default BlogList
