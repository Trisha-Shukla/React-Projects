import styles from './App.module.css'
import { About, Experience, Hero, Navbar } from './components'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>

    </div> 
  )
}

export default App
