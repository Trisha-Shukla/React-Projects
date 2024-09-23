import { useState } from 'react'
import './App.css'
import CurrencyBox from './Component/Index.jsx'
// import useCurrencyConvertor from './CustomHook/currencyHook/currencyHook.js'
import useCurrencyConvertor from './customHook/currencyHook.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [covertedAmount, setCovertedAmount] = useState(0)

  const currencyInfo= useCurrencyConvertor(from)
  console.log(currencyInfo)
  const options = Object.keys(currencyInfo) || []
  // const options=[]

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(covertedAmount)
    setCovertedAmount(amount)
  }
  const convert=()=>{setCovertedAmount(amount*currencyInfo[to])};
  

  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center bg-slate-400'>
      <form action="" onSubmit={(e)=>{
        e.preventDefault();
        convert();
      }}>
      <div className='p-5 bg-pink-400 rounded-md'>
    <CurrencyBox labelValue="from" amount={amount} currencyOptions={options} onAmountChange={(amount)=>{setAmount(amount)}} selectCurrency={from} selectCurrencyChange={(curency)=>{
      setFrom(curency)
    }} ></CurrencyBox>
    
    <button onClick={swap}>swap</button>
    <CurrencyBox labelValue="to" amount={covertedAmount} currencyOptions={options} onAmountChange={(covertedAmount)=>{setCovertedAmount(covertedAmount)}} selectCurrency={to} selectCurrencyChange={(curency)=>{
      setTo(curency)
    }} ></CurrencyBox>
    <button>Submit</button></div>
    </form>
    </div>
     
    </>
  )
}

export default App
