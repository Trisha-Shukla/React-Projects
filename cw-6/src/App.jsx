import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cart from './Components/Cart/Cart'

function App() {
  
  
  const data={
    "cartItems": [
      {
        "id": 1,
        "name": "Samsung Galaxy S8",
        "price": 399.99,
        "quantity": 1,
        "image": "https://www.course-api.com/images/cart/phone-1.png"
      },
      {
        "id": 2,
        "name": "Google Pixel",
        "price": 499.99,
        "quantity": 1,
        "image": "https://www.course-api.com/images/cart/phone-2.png"
      },
      {
        "id": 3,
        "name": "Xiaomi Redmi Note 2",
        "price": 699.99,
        "quantity": 1,
        "image": "https://www.course-api.com/images/cart/phone-3.png"
      },
      {
        "id": 4,
        "name": "Samsung Galaxy S7",
        "price": 599.99,
        "quantity": 1,
        "image": "https://www.course-api.com/images/cart/phone-4.png"
      }
    ],
  
  }
  const [cartQuantity, setCartQuantity] = useState(data.cartItems)
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    const tot=cartQuantity.reduce((accum,item)=>{
      accum=accum + (item.price* item.quantity);
      return accum;
    },0);
    setTotal(tot)
  },[cartQuantity])
  


  const add=(index)=>{
    
    const dataCopy=[...cartQuantity];
    dataCopy[index].quantity=dataCopy[index].quantity + 1;
    setCartQuantity(dataCopy);
    
  }
  const reduce=(index)=>{
    const dataCopy=[...cartQuantity];
    if (dataCopy[index].quantity > 1) {
    dataCopy[index].quantity=parseInt(dataCopy[index].quantity)- 1;
    setCartQuantity(dataCopy);
    }
  }
  const remove=(index)=>{
    console.log("removed");
    
    const filterCart=[...cartQuantity];
    filterCart.splice(index,1);
    setCartQuantity(filterCart);

  }

  const totalItems = cartQuantity.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className='flex justify-around p-5 bg-blue-600 text-white text-3xl font-bold'>
        <div className=''>useReducer</div>
        <div className='relative pt-4 px-4'><i class="fa-solid fa-cart-plus"></i> <span className='absolute rounded-[50%] flex justify-center items-center w-7 h-7 px-1 top-0 right-0 text-sm z-50 bg-slate-500'>{totalItems}</span></div>
      </header>
      <main className='max-w-4xl m-auto text-center p-5'>
        <h1 className='text-2xl'>Your Bag</h1>
        {
          cartQuantity.map((cart,index)=>{
            return(
              <Cart key={"cart"+index} price={cart.price} mobileName={cart.name} url={cart.image} quantity={cart.quantity} add={()=>{add(index)}} reduce={()=>{
                reduce(index)
              }} remove={()=>{
                remove(index)
              }} />
            )
          })
        }
        <div className='p-5'>
          <hr />
          <div className='flex justify-between p-4'><span className='text-xl'>Total</span> <span className='bg-blue-600 text-white p-2 rounded'>${total.toFixed(2)}</span></div>
          <button className='text-center p-2 bg-blue-400 text-white rounded hover:bg-blue-600' onClick={()=>{
            const recreateCart=cartQuantity.map((item)=>{
              return {...item,quantity:0}
            })
            setCartQuantity(recreateCart)
          }}>clear</button>
        </div>
        
      </main>
    </>
  )
}

export default App
