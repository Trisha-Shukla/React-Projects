import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import ContactForm from './components/ContactForm/ContactForm'
import ProfilePage from './components/ProfilePage/ProfilePage'
import { Provider} from 'react-redux'
import store from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <div style={{display:'flex', flexDirection:'column' ,height:'100vh'}}>
        <Header/>
      <div style={{display:'flex', height:'100vh'}}>
        <ContactForm/>
        <ProfilePage/>

      </div>
        

    </div>
    </Provider>
  )
}

export default App
