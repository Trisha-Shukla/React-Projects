// App.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header, Login } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        console.log("Fetched user data:", userData); // Check what userData returns

        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [dispatch]);

  // Show a loading indicator while checking auth status
  if (loading) return <div>Loading...</div>;

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block min-h-screen h-full relative'>
        <Header />
        <main className='pb-[300px]'>
          {/* Show main content if authenticated, otherwise render Login */}
          {isAuthenticated ? <Outlet /> : <Login />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
