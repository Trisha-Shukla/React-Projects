import { useState } from 'react'
import { Header, MainContainer, SideContainer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen h-screen flex flex-col'>
      <Header/>
      <section className='flex flex-col md:flex-row w-full h-full'>
      <SideContainer/>
      <MainContainer/>
      </section>
    </div>
  )
}

export default App
