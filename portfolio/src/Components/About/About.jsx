import React from 'react'

function About() {
  return (
    <>
      <section id='about' className='grid grid-cols-1 lg:grid-cols-2 gap-5 bg-gradient-to-bl from-[hsla(0,3%,6%,.582)] to-[rgba(12,8,24,.904)] text-white pb-[30px] relative px-5 pt-[190px] h-screen'>
  

        
        <div className=' space-y-5'>
            <h1 className='text-3xl font-bold'> Know Who I'M</h1>
            <p className='text-2xl font-normal'>Hi Everyone, I am Trisha Shukla from Indore, India.I'm a passionate Front-End Developer with a strong foundation in
          JavaScript, React. I enjoy building responsive web
          applications and solving real-world problems through code.</p>
          <p className='text-2xl font-normal'>While I don't have formal work experience as a Front-End Developer yet, I have developed several personal
          projects like an Expense Tracker and a Portfolio Website. These projects
          allowed me to apply front-end and back-end technologies and create meaningful solutions.</p>
          <p className='text-2xl font-normal'>I'm continuously learning and improving my skills through online
          courses and by participating in hackathons like Geekathon. I'm
          excited to continue growing in this field and look forward to
          contributing to impactful projects in the future.</p>
        </div>
        <div>
            <img src="https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png" alt="img-about" />
        </div>
      </section>
    </>
  )
}

export default About
