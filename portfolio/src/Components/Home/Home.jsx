import {React,useRef,useEffect} from 'react'
import {Link} from 'react-router-dom'
import anime from 'animejs';

function Home() {

    const textRef = useRef(null);

    useEffect(()=>{
        anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
    },[])

  useEffect(() => {
    const textWrapper = textRef.current.querySelector('.letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  }, []);


    
  return (
    <>

      <section id="home" className='w-screen h-screen flex flex-col justify-center items-center text-white space-y-2'>
      <h1 class="ml5">
  <span class="text-wrapper">
    <span class="line line1"></span>
    <span class="letters letters-left">Hello,</span>
    <span class="letters ampersand">Im</span>
    <span class="letters letters-right">Trisha</span>
    <span class="line line2"></span>
  </span>
</h1>

        <div className='ml6'><h2 className="text-4xl text-wrapper" ref={textRef}>
        <div className='letters'>This is my work</div></h2></div>
        
        <button className='bg-black p-3 rounded'>
            <Link to="/prjects">View my work</Link>
            </button>
      </section>
    </>
  )
}

export default Home
