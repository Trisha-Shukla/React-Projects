import styles from './App.module.css'
import { About, Contact, Experience, Hero, Navbar, Projects } from './components'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>

    </div> 
  )
}

export default App
