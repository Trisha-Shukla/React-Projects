import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeList from './component/employeeList'
import TeamList from './component/teamList'
import employeeData from './component/data.json'

function App() {
  const initialValue={
    employeeList:employeeData,
    teamList:[],
  }

  const reducer=(state,action)=>{
    console.log(action.payload);
    console.log(state);
    
    switch(action.type){
      case 'add':
        return {
          ...state,
          teamList: [...state.teamList, action.payload],
        };
      
      case 'remove':
        return {
          ...state,
          teamList:state.teamList.filter((list)=>{
            return action.payload.id!==list.id
          }),
        };
      case 'sort by age':
        const sortedteam=state.teamList.sort((a,b)=>a.age-b.age)
        return {
          ...state,
          teamList:sortedteam,
        };
       default:
        return state 
        
    }
    
  }
  const [state, dispatch] = useReducer(reducer,initialValue)

  return (
    <div className='flex lg:flex-row flex-col gap-3 justify-evenly p-5 h-screen'>
      <EmployeeList dispatch={dispatch} employeeList={state.employeeList} teamList={state.teamList}/>
      <TeamList dispatch={dispatch} teamList={state.teamList}/>
    </div>
  )
}

export default App
