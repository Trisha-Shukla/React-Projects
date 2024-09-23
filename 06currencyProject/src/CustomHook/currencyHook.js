import { useState, useEffect } from 'react';

function useCurrencyConvertor(currency) {
    console.log("cc");
    console.log((currency));
    
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      
        const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
        const datares = await res.json();
        console.log(datares);
        console.log("datares");
        
        setData(datares[currency]); // Set the fetched data for the selected currency
     
    }

    fetchData();
  }, [currency]);

  // Return the data state so the component using this hook can access it
  return data;
}

export default useCurrencyConvertor;
