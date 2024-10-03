import { useContext, useRef } from 'react';
import {UserContext} from '../Context/UserContext';

function Login() {
    // const [name, setName] = useState("");
    // const [password, setPassword] = useState("");
    const name=useRef(null)
    const password=useRef(null)
    const { setUser } = useContext(UserContext);

    const submitBtn = (e) => {
        e.preventDefault();  // Prevent page refresh
        const UserName=name.current.value;
        const UserPassword=password.current.value;

        // Set the user object with the input name and password
        setUser({ UserName, UserPassword });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitBtn}>
                <input
                    type="text"
                    placeholder="Name"
                    
                    ref={name}
                />
                <input
                    type="password"
                    placeholder="Password"
                    
                    ref={password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
