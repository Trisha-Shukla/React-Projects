import { useState,useEffect } from 'react'

 function useCurrencyConvertor(currency){
    const [data,setData]=useState({})
    useEffect(async()=>{
        const res=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
    const datares=await res.json();
    setData(datares[currency]);
    console.log(data);
    },[currency])
    
}

export default useCurrencyConvertor