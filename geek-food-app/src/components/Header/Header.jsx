import {Link, NavLink} from 'react-router-dom'
function Header(){
    return(
        <>
        
        <div className=" fixed top-0 inset-x-0 z-50 flex  px-3 py-5 lg:px-10 justify-between bg-white  items-center">
            <div className="flex gap-3  order-1">
                <Link to="/">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
                </Link>
                
                <span className="text-2xl font-bold">GeeksFood</span>
            </div>
            <ul className="hidden lg:flex lg:gap-4 lg:order-2 justify-self-center text-lg font-semibold">
            
                <li ><NavLink to="/" className={({isActive})=>`hover:text-blue-600 ${isActive?"text-blue-600":"text-black"} hover:cursor-pointer`}>Home</NavLink></li>
                <li ><NavLink to="/quotes" className={({isActive})=>`hover:text-blue-600 ${isActive?"text-blue-600":"text-black"} hover:cursor-pointer`}>Quotes</NavLink></li>
                <li ><NavLink to="" className={()=>`hover:text-blue-600  hover:cursor-pointer`}>Restaurants</NavLink></li>
                <li ><NavLink to="" className={()=>`hover:text-blue-600  hover:cursor-pointer`}>Foods</NavLink></li>
                <li ><NavLink to="" className={()=>`hover:text-blue-600  hover:cursor-pointer`}>Contact</NavLink></li>
                
            </ul>
            <div className="text-2xl font-bold order-3 lg:hidden justify-self-center">=</div>


            <button className="custom-button">Get started</button>
        </div>
        <hr />
        
        </>
    )
}

export default Header;