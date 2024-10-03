import { useContext } from 'react';
import {UserContext} from '../Context/UserContext';

function Profile() {
    const { user } = useContext(UserContext); 
    console.log(user);
    // Make sure to destructure 'user'

    return (
        <div>
            Welcome, {user ? user.UserName : 'Guest'} {/* Display user or fallback to 'Guest' */}
        </div>
    );
}

export default Profile;
