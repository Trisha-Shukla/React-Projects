function Quotes() {
    let data = {
      quotes: [
        {
          quote: "The only limit to our realization of tomorrow is our doubts of today.",
          author: "Franklin D. Roosevelt",
        },
        {
          quote: "In the middle of every difficulty lies opportunity.",
          author: "Albert Einstein",
        },
        {
          quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          author: "Winston Churchill",
        },
        {
          quote: "Believe you can and you're halfway there.",
          author: "Theodore Roosevelt",
        },
        {
          quote: "The future belongs to those who believe in the beauty of their dreams.",
          author: "Eleanor Roosevelt",
        },
        {
          quote: "Do not watch the clock. Do what it does. Keep going.",
          author: "Sam Levenson",
        },
        {
          quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
          author: "Walt Whitman",
        },
        {
          quote: "It does not matter how slowly you go as long as you do not stop.",
          author: "Confucius",
        },
        {
          quote: "Life is 10% what happens to us and 90% how we react to it.",
          author: "Charles R. Swindoll",
        },
        {
          quote: "The only way to do great work is to love what you do.",
          author: "Steve Jobs",
        },
      ],
    };
    let quotesArray=data.quotes;
    
   return(
    <>
    <section id="quote" className="px-10 py-20 space-y-4">
        {
            quotesArray.map((quote,index)=>{
                return (<div className="p-5 bg-gray-100 rounded-md text-center shadow" key={index}>
                    <p className="text-2xl font-bold">{quote.quote}</p>
                    <h5>{quote.author}</h5>
                    </div>)
            })

        }
        
    </section>
    </>
   )
    
  }
  
  export default Quotes;
  