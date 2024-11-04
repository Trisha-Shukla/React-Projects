import { useState } from "react";
import { createContext } from "react";

export const blogContext=createContext();

const BlogContextProvider=({children})=>{
    const [state,setState]=useState({user:{}})

    return(
        <blogContext.Provider value={{state,setState}}>
            {children}
        </blogContext.Provider>
    )
}

export default BlogContextProvider