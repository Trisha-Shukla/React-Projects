import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Logo, LogoutBtn } from '../index';

function Header() {
    const authStatus = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    // Define navigation items based on authentication status
    const navItems = authStatus
        ? [
            { name: 'Home', slug: '/' },
            { name: 'All Posts', slug: '/all-posts' },
            { name: 'Add Post', slug: '/add-post' },
        ]
        : [
            { name: 'Login', slug: '/login' },
            { name: 'Signup', slug: '/signup' },
        ];

    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                        {authStatus && (
                            <li>
                                <div>
                                    <LogoutBtn />
                                </div>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
