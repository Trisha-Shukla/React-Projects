import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Home, Layout, ReciepeCard, RecipeDetail } from './components'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  // const fetchRecipes = async () => {
  //   const apiKey = 'bbdc91cbc53c42ec9e74f5b9b4f9c9a2';
  //   const url = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=5&apiKey=${apiKey}`;
  
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch recipes');
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error:', error.message);
  //   }
  // };
  
  // fetchRecipes();
  

  return (
    <div className='flex flex-col min-h-screen h-screen '>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='/recipe' element={<ReciepeCard/>}/>
          <Route path='/recipe/:id' element={<RecipeDetail/>}/>

          </Route>
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App
