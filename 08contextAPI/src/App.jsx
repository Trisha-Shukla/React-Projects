import './App.css';
import {UserContextProvider} from './Context/UserContext';
import Login from './Component/Login';
import Profile from './Component/Profile';

function App() {
    return (
        
            <UserContextProvider>
                <h1>Profile</h1>
                <Login />
                <Profile />
            </UserContextProvider>
        
    );
}

export default App;
