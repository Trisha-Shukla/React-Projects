import React, { useState } from 'react'
import {collection,addDoc} from 'firebase/firestore'
import { fireStore } from '../../config/config'; 
import {useNavigate} from 'react-router-dom'

function CreateBlog() {
  const blogCollectionRef=collection(fireStore, 'blogs');
  const navigate= useNavigate();
  const [blog,setBlog]=useState({
    title:'',
    body:'',
  });
  const onInputChange=(e)=>{
    const value=e.target.value;
    const id=e.target.id;
    console.log(value);
    console.log(id);
    
    setBlog({
      ...blog,
      [id]:value,
    })
  }
  const submitForm=async(e)=>{
    e.preventDefault();
    try {
      await addDoc(blogCollectionRef,blog)
      alert("Blog Added successfully")
      navigate('/')
      
    } catch (error) {
      console.error("error: ",error);
    }

  }
  return (
    <div>
      <h1>Create Blog</h1>
      <form action="" onSubmit={submitForm}>
        <div>
        <label htmlFor="title">Title</label>
        <input type="text" id='title' value={blog.title} onChange={onInputChange}/>

        </div>
        <div>
        <label htmlFor="body">Blog Body</label>
        <textarea name="" id="body" value={blog.body} onChange={onInputChange}></textarea>

        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateBlog
