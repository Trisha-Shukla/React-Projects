import React, { useRef, useState,useEffect } from 'react'
import styles from './Contact.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, editContact } from '../../store/slices/contactSlice'
import { addDoc, collection } from 'firebase/firestore'
import { fireStore } from '../../config/config'
import { TiContacts } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";

function ContactForm() {
  const [contactApp,setContactApp]=useState({
    name:'',
    surname:'',
    number:'',
    isFav: false,
  });
  const nameRef=useRef(null)
  const surnameRef=useRef(null)
  const numberRef=useRef(null)
  const dispatch=useDispatch()
  const allContact=useSelector((state)=> state.contacts)
  const addContactList=collection(fireStore,'contact');
  const isEdit=allContact.isEdit;
  // console.log(isEdit);
  
  
  const onInputChange=(e)=>{
    const id=e.target.id;
    const value=e.target.value;
    setContactApp({...contactApp,[id]:value});
  }
  const submitForm=async(e)=>{
    e.preventDefault();
    try {
      if (!nameRef.current.value || !surnameRef.current.value || !numberRef.current.value) {
        alert("Please fill in all fields");
        return;
      }
      const contactForm={
        name:contactApp.name,
        surname:contactApp.surname,
        number:contactApp.number,
        isfav:false,
        id:Date.now(),
      }
      console.log(contactForm);
      
      const res= await addDoc(addContactList,contactForm);
      if (isEdit) {
        // Edit mode
        dispatch(editContact(contactForm))
    } else {
        // Add mode
        // Todo : Logic to save the data
        // Todo : Instead of adding data locally to redux, call an API and save the data to firebase
        dispatch(addContact(contactForm));
    }
      setContactApp({
        name: "",
        surname: "",
        number: "",
        isFav: false
    })
      
    } catch (error) {
      console.error("Error: ",error)
    }
    

  }
  useEffect(() => {
    if (isEdit) {
        // Find the edit contact details
        
        const contactToEdit = allContact.contactList.find(data => data.id == isEdit);
        console.log(contactToEdit);
        
        if (contactToEdit) {
            // Perfill in the form 
            setContactApp(contactToEdit)
        }
    }
}, [isEdit]);
  return (
    // <div style={{height:'100%'}}>
      <div className={styles.contactFormBox}>
        <div className={styles.allFavContainer}><div><TiContacts style={{fontSize:'2rem'}}/></div> <div> <div>All contacts</div> <div>{allContact.contactList.length} contact</div> </div></div>
        <div className={styles.allFavContainer}><div><FaHeart style={{fontSize:'1.5rem'}}/></div> <div> <div>Favourites</div> <div>0 contact</div> </div></div>
        {/* <img className={styles.imgBox} src="data:image/jpeg;base64,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" alt="work-img" /> */}
        <img className={styles.imgBox} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEhMWFhUVGRcWFxYXFhUVGBUYFRgXGBYVFhUYHSggGBolGxUVITEhJSktLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGy8lHyYtLy4wLS8tLS8vLS0vLy0tLS0tLS0vLy0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKsBJgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYCAwUHAf/EAEUQAAEDAQMHBgsGBQQDAAAAAAEAAhEDBBIhBTFBUWFxkQYTIoGhsRQWMlJTkqLB0dLwBxVCYpPxI0NUcoIzsuHiRHPC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EAC0RAAIBAwMDAwMDBQAAAAAAAAABAgMEERIhMRNBUQUUoSMyUhVhsSJxgcHx/9oADAMBAAIRAxEAPwCpIiL60wCIiAIiIAiIgCIiAIiIAizpUHv8ljnRnutLo3wMFs8Breiqfpv+CjKBoRbatmqNEuY9o1ua5o4kLUmQERFICIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIAgPimWXJdariym4jWYaOLoBVz5PWE2ei5jwCahvOEAxgAG7Yid5K6C5JXOG0kD5yRsTqFnuPi8XuJgzniMdcBdbnxt9V3wWuw+T1lfLx85/q/9V5s3qk2yUYZVoc9QqMmL7HAEg4EgwY2GD1KiP5J1dFRh33h7ivQavkHPmOfArmLahVlBNIhlJqcmbQMwY7c75gFDrZKrs8qk/qF4cWyF6I9hGcRKxXSrqRB5iUXpFpstOpg9jXbwDwOcLiW7ktTdjScWHUZc3jnHatY3MXzsSVJFIt1hqUXXajY1HOHbQdKjroTT3QCIikBERAEREAREQBERAEREAREQBERAEREAREQBERAFkKTiJumNcGOOZWTkxkdrm89UEzNxpzYYXiNOMxuWrlFWJrOBzMAAGqQCe/uXm31/7eOYrL4O706z91V0N4SWWcHmnau5T8hUgK9MvgNBmSREgG77UKyUuT9K6JLicCSDE6xGaFzsu5NZRulkw6QQTObSCuKrf3cIapRjj/J20bWwrVOlCUs7+MFpRczk9WLqIkzdJaNwgjvhdNa0pqcFJdzybii6NWVN9ng20a5bmzalLbbGxpB1f8rnopcEzLJvr2ouwzDV8StCIrJJEGT6hdEmYXPy1lHwai6sWF4bd6IMHpODZnVipy02uztqsfTd5L2lp3OEYbUBQrZy/rH/AEqTGDW4l57LoHapGQuXLi+7aroacz2tIumR5Qnyc+OiNKsGRfs9sjWNdWvVn4k4ljD0jHRaZzQM+KpvKDkXaLMXOug0TUDGODgTFR12nLc4OIB2rnjcwlNwzuWnbVoRU3uj0e22RlVhY8SDxB0EHQV53aaJpvcw52kt3wYlelAaF5xlCoXVahdg4vcSNIknBenat7oqaEUqz5NrVPJpuO2IHE4KycnuSRL79ouljfwAzeOpxzRsGdbzqxgstklcsWS69bGlSe4awOj6xw7VK8WrZ6B3rU/mXqLQAAAIAwAGAGwDQvq4XfS7InB49a7HUpG7UY5h0XgRO6c/UtK9htdlZVYWVGhzTnB7xqO0Ly/L+SzZaxpzLfKYTpac07QQQdy6aFyqmz5DRzkRF1EBERAEREAREQBERAEREAREQBfCvqID0ixUrlNjRoa0cAFWeUVEtrEnM4AjqAB7u1cIWl8RffGq86OErUDpXmXXp3Xhp1Y7nbYXjtauvGVjDLTkzLvNtuVAXADokROxpnvXPyjbnVnXnYAYAaAPedq5LaxGniuvyYsbqtUPM3KeJ1F34R7+oa158/TLlw0TmtK+T1I+pWdKbrQpvU/j/pY8g2c06IDhBcS6NUwBPUF1ed6N2BvWtF006ahBRXY8KvWdWpKo+W8hEXO8Lfs4KKlVQ5M1HJ0UXO8Lfs4J4W/ZwWfuoFtDOii53hbtnBYZDt7qtN/ORepvcx0CJDcQY3dyvCtGfBVxwWGw1gBdJjV16FsyhZW1WXXCcWPA/NTe17faaFUK+V3k9HojiesqZbOUr3tLWsDJzmS47YwELx69WHV10z1KNT6ThMnsqtOZwO4grOFlkrI1IUm32Nc5wBJcJicYGqFhzYY5zAZDTAnEgFrXQTsvRuhehbXnVlpawcla1dOKlk+rpWEdAdfeucBOC6lnp3WgLpqPY5ka7O55JvDDdHDWlJz7xBGGOjhB0qQizyWwR2vffiOjuwjRiql9owE0Dpipw/hx3lXQlefcui91ZryP4d0NYdAOJdOok9kal0Wu9VMhlaREIXrkE7I2Sn2qpzbMMJc45mjXt3Kdyh5NusjWvD77CbpN26WmJEiTgYOKsf2f2UNoPqaXvIn8rBA9ovUzlqB4HU304/UYuCVzLraVxwTjY80REXeQEREAREQBERAEREAREQBZ0qTnm61pcToAJPAKfkTJJtDjJhjfKOk/lG3uV1sllp0W3WNDRp27SdPWsKtdQ27kFXyfyYqOxqm4PNBBcfcO3crRSp06LABDGN1mBvJOnaVxsp8ogJbRgnzzm/xGnfm3qvWi0PqGXuLjtObcNHUvGufUlnC3/gylVS4LbaMv0GZnF39o95gKXk62c8y+GloJIE5zGE8Z4Ki0qZcQ0YkkAbzmV+stAU2NYMzQBvjSs7WvUqybfCFOTkzauXaGw4jb34rqKDb24g6x3futbmOYZOiHJFAWyrRLc+la1nUql2c5lwrGHnk0MFoyG2LVaKXpKfOAbWgtPa7sW9RRV5q2WWroLjSd/mIbPW4nqUxbSaXhlljUs+SEFvsVDnKjGec4A7tPZKW2lcqPb5rnDgSupyUoXqxd5jTxdgOy8vMOqEczwW1zgBJwAx3AKu2CtzjS/S9znHZJwHqhqn8o7TcoOGl/QHXn7AVVMn2rm3g/hODt2vqXTa1VTqJsvff1LSi0UqhaZETtW3w1+zh/yo6L3mkzySR4Y/ZwTwx2zgtLHRoB3rFRpQyZ1KznZytVSkHAhwBacCCJB2LYwDScO07AvtV0x3DMNm1WW3AOO7k7ZiZuEbA94B2Z8OpTLTk2zvff5lkwBmkdEADo5sAAM2hSUVtcvIOhYKLWU2ta0NGMAAACSTmG9QuU9kNezmmDBJBGoluMHrAXSpeS3cFGyg7MN5WEG9eSz4PJSEUrKzYr1QPPf/uKir208rJAREUgIiIAiIgCLYKe1fDSXCvUbfONXwynUiYIvpaQvi7IzjJZi8osnku/JRo8GbGcl5O+8R3Bq53KPKhcTRYeiMHnzj5u4d+5RchZW5mlVZPS8qnvMNPDA8VzWNk9pJ0DSSvn/VKrjLQu5jVl2QYyfedA3o+NE9enq0L69+gZh27TtUjJthdXfdbgPxO0NHx1BePGLk8Ixx2R0+S1hvONYjBuDdrjnPUO/YrQtdCi2m0MaIDRA+tanWOo0AgxM6pXu0afShg6oRwsEVa61IPEFdu4NQ4JcGocEc01ho0wV02NoxLjhuXBtWWqAqUgyoHU3GKhh0sEt6Qw2u0HMvQCwahwC1eB0/Rs9RvwWbjB9i2WcfJ9ms1oaXUqxeAYMQIOeCCAVla+TlKrdaajxDg4QWgy3q2rssoMb5LWjc0DuWVwahwXN7dp5UmdHXhjeCNFXJtF5LnU2knEmM620LOymOg1rRpgAZtcLYF8c0HAid+Kx9k/J0e+iuIlS5UW5tR7WtcC1gMkGRednx0wAO1cWQvReZb5reATmW+a3gFHsn+RzyuNTy0cKwvmmw/lHwW9dcMGocF8fdaJMcF6kZ4SRytbnJRSrZUaQLuvVCirVPJUItlCmHGCYWBCnIJFgYCTOgKRVsjXZsD9aFCs9S64HRp3LqFZTymWR8jMPrBRbTZ3OdOEYKXp6u/9kmc3FUTaJPO+U/J6pQvVy8Oa95mAQW3iSM+caJVdVv5d5XDoszDN03qh2jMzqmTtjaqgvYt3JwTkVYREW4CIiAIiIDOk/QpAcNI6wTPbI7lEWTakLxb/ANNdSXUpc90Yzp53RKNOc2I06CN4UZ7IxWxtXbB+tK2npCdIzjQRrG3YvLo1a1nU3TXleTNNxZHohSamHR9bfq6u+VjZxdl2rNvOb3nqSk8AyQHRoMwd8Z1nd1lWrOa4f8ETeXk6OScjOr9I9FmvS7+3496ttlszKTbrBA79pOkqn1co2l/4ngaA0XANguxgtbbRaBmfV9Z5960o16VLiLf7loyUexeUVQs/KCsww6HjU4QeI98rvZPyzSrYTdd5rtP9pzHv2Lvp3VOpsnhmsZpnT5x2s8Svoe44ScdpWC3WNsvGzHgt3si5H5VZYp2GjztQmAYhvlOJzNEneeoryHLf2j2yvLaTuYZ+QkvO+oc3+ICsf232sxZ6WiXuO9oaB/vK83yPkt9qeadO7Ia5/SMCGCTjGeFw1JyzpRrFLk3eMVs/q7R+tU+ZPGK2f1do/WqfMuYu3Z+SNtqUxVbQJY5t4OvMEtImcXaljuy5H8YrZ/V2j9ap8yeMVs/q7R+tU+ZZHk3a/Qni34rZS5LWt38uNpewe+VXWvJODT4xW3+rtH61T5lfOR1ttJs9+pWquLnOILqjybuAGc5pBXDyXyLAIdXeD+Rkwd7jHYOtX7J+SSYltxgAgZsBmDRoELOTlUeiG5ZJR3ZZckvMMDiTLRnJOMA6VnawQ4iTGdaqToIOohSsoNzHePevXS0tI5XuQwJQhZU3lpkZ18e4kydK0IPiIt9i8sdaN4QNBC6VjqXm7sPgtzgDnWFOkGzGlYymmiyWDIDP9bfeuLytyubNR6B/iPN0HzRBJdv1bwu21V/LPJo2pzS6tdDQcAyZJzmbw1BWo6NWZ8EnnJKKw5f5Kus1PnW1A9gIDujdLZMA5zIkgdary9iE4zWYlQiIrgIiIAiIgCIiALs5OsLC1rrxJ04iBszLjK12BjWWam0eU/8AiO6wYnqjgvO9SSdHcYT5Iv3cyIl2vOPgsm5OGZpcDrETxjuUpTsmVgCWnTEb9S8GnTjKWGHCPg4FXINoH4Q7c4e+FHOSq/oncFekXU7CHZsxdJFQs+Qa74vdAfmMxuaP+F3snZHp0cQLzvOdo3DR37V0UW1K1p091uy0aaQUzJzc56vj7lDU6n0aU657cAtp8YNEeR/bLUmrQ/teeLh8FweQP+raDqstc+yB713fthb/ABLOfyPHBw+K532cWW94Y/Q2zPZ1vxHZTK4pL6povtKavdsm9DJ1H/0Uhxa34rwle/WyjcoU6Wrm6fqtj/5CrDaE3+xL5RPs9IBjRAwAHYtl0ahwUeardAeNnRdwOB4hYfeVPNjezXYMzq1dq61OEViW39ymG+DZbqYNN+H4T2Yr7YXTTYfyjsEe5Yu5x4iAwHDHpOx2DAcSteR3TSGwkdpPvVYtdVYXK/2H9pNU6r0qQOqOzAqCp1hxaW/WP0VtPyVRBRFvo029GQSXdQAmFZvBBoX1joMjQtlCL41T+y6NSkHZwqSlglI+03BwBGlMy10KNyRMjRsW12ZYvksfGnBfQvqr/KXLVSkeZs7HuquEy1hcGA5iAAZdhuHYrQg5vCBzOXmVxAszDJkOqbIxazfME7hrVLXVdydthBeaLzpJJaXHSTdvXieqVyl7FCMYx0xeSoREWwCIiAIiIAiIgJWTrJzrsfJGJ+CsTRGAwCiZJpXaQ/N0j15uyFMXzd9XdWo12RdIIiLjJOrk+03hdOcdoUxcKz1LrgdvZpXdXpW9Ryjv2M5IIiLcgAKdbsGhv1h9BRrK2XjjwWy3ul0ah3/QVXvJEnnP2oZGtFpNnNCi+pdFS9caXXZuRMbjwW77PMhVbPZrQK1N1N9U3brgQS1rOiY1TUcrg/KtOi666q1riJgkDDaTgOtZOtzHNNUvBZnvYRhh3iFhp+q5ZWDTK0LnJ4zkPklbPCKPOWWq2nzjC9zqbg0NDgXSSMMJXrmUpc+k0RN4uxzdGDJ7VKpZZZWhrarXE4hoicMcREjrUZ+Nob+VhPGR7wslDFPDfLXBaTWrbx3Nvgl7y3F+zyW+qPfK3cy2Lt0RqgRwWaLsVOK7GOWRvBLv+m4s2eU31T7oWnJMjnGnO157dXBT1BsuFeqNYa7sx71jOCjOLXnHwWTymTlJsDodGsd30VGWdF0OB2reSyihlamw48eKx550ROCkZQbiD1cFEUR3RLC6lnq3xOnSuWs6NUtMj90nHKCZ1JhfXfXesadQOEhfY+vresCxkvl5IXOyxlqlZWy8y4+SwYud1aBtKmMXJ4QNuVspMs1J1V2jyR5ztDR9ZpXkznEkk5zid5U7LOVqlqfffgB5LBmYNms6zp4BQF61tQ6cd+WVYREXSAiIgCIiAIiIDtZKtzboY4wRgJzEaMda6YVSX1riMxI3GF5lb02M5OUXjJKZbEhVbn3+e71j8V8Fd4/E71isP0qX5fBOoulksjnEEiANenYF115wLbVH82p67visxlKuP51T13fFdNOw6awmVe56Ii89GVrR6Z/rFZjLNo9K7s+C09rLyQelZPAkk7uKqOWcrWt73ClRe1skB1xxcQDEjCAFxPvu0+lPBvwX379tPpT6rPlWNSxnLiWCyeOxofk+0EkmlVJOJJY8k7zCydZbSWhhp1brZIbcfAJMkxGfErd9/wBp9L7NP5V9HKC0+l9in8q5f0d/kadV+DbkCyVmWim403gSQSWOAALSMSQrVRpnnqjiDENAOvMTHBVHxhtPpPYp/KnjDafSexT+VbU/TXBJZ75KubZekVF8YrT6Qeoz5U8YrT6Qeoz4Lp9tMzL0oZpkV70GCyCdEg/sqj4xWn0nsU/lTxhtPpPYp/KqTs5Sxvw8kp4L0ionjDafS+xT+VPGC0+l9in8qv7aRB6RaHB1MHSIPuKhKh/f9p9KfVp/Kvn37afSn1WfKoVpJdyS+oqD992n0ruDfgsTlm0elfxU+2l5IPQ6VUtMj91NFsbEngvLTla0emqesVgco1j/ADqnru+Kh2bfLJPSrbaHPaWscac/ibdLuq8CBwVbq8lWuJcatQk4kuhxJ1k6VVjbKpz1H+u74rB1VxzuJ3klaQt5Q+1gslTkmB/Ojez/ALKDacghn/kUf8nXe6VxSEhbKM+8vgGT2wSJBjSMx2jYviItQEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q==" alt="work-img" /> 
        <form action="" onSubmit={submitForm} className={styles.formContainer}>
            <div>
                <input onChange={onInputChange} value={contactApp.name} type="text" placeholder='Name' name="" id="name" ref={nameRef} />
                <input onChange={onInputChange} value={contactApp.surname} type="text" placeholder='Surname' name="" id="surname" ref={surnameRef}/>
            </div>
            <div>
                <input onChange={onInputChange} value={contactApp.number} type="text" placeholder='number' id='number'  ref={numberRef}/>
            </div>
           {(isEdit)? <button>Edit</button>:<button>Add</button>} 
        </form>
      </div>
    // </div>
  )
}

export default ContactForm