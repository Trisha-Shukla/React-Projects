import { useState,useEffect,useRef } from 'react';
import './App.css';
import MySlider from './Components/MySlider';
import { Pie } from 'react-chartjs-2';

function App() {
  const dataArray = [
    {
      id: 1,
      headingTop: "Home Loan",
      initialValue: 3000,
      min: 1000,
      max: 10000,
      currency: "$",
    },
    {
      id: 2,
      headingTop: "Down Payment",
      initialValue: 600,
      min: 0,
      max: 3000,
      currency: "$",
    },
    {
      id: 3,
      headingTop: "Loan Amount",
      initialValue: 2400,
      min: 0,
      max: 3000,
      currency: "$",
    },
    {
      id: 4,
      headingTop: "Interest rate",
      initialValue: 5,
      min: 2,
      max: 18,
      currency: "%",
    },
  ];

  const [data, setData] = useState(dataArray);
  const [tenure, setTenure] = useState("5");
  const [totalInterest, setTotalInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
    
        labels: ['Principle', 'Interest'],
    datasets: [{
      data: [principle, totalInterest],
      backgroundColor: ['#FF6384', '#36A2EB'],
    }]
      }
    });

    return () => {
      myChart.destroy();
    };
  }, [principle,totalInterest]);


  const handleValueFromChild = (index,newValue) => {
    console.log(index);
    console.log(newValue);
    const updatedData = [...data];
  
  // Check if index is valid and update the value
  if (index >= 0 && index < updatedData.length) {
    updatedData[index].initialValue = newValue;
    setData(updatedData);
  } else {
    console.error(`Invalid index: ${index}`);
  }
    
  };

  useEffect(() => {
    
    
    const calculateLoan = () => {
      const monthlyInterestRate = (data[3].initialValue / 100) / 12;
      const calculatedMonthlyPayment = (data[2].initialValue * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -Number(tenure) * 12));
      const calculatedTotalInterest = (calculatedMonthlyPayment * Number(tenure) * 12) - data[2].initialValue;
      setMonthlyPayment(calculatedMonthlyPayment);
      setPrinciple(data[2].initialValue);
      setTotalInterest(calculatedTotalInterest);
    };

    calculateLoan();
  }, [data, tenure]);

  console.log(totalInterest);
  console.log(principle);
  console.log(monthlyPayment);
  

  

  return (
    <>
      <div>
        <header className="bg-blue-600 text-white p-5 font-semibold text-2xl">
          <h1>Bank of React</h1>
        </header>
        <main className="p-5 grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
          <section id="slider">
            {data.map((dataSet, index) => (
              <MySlider
                key={dataSet.id}
                headingTop={dataSet.headingTop}
                initialValue={dataSet.initialValue}
                min={dataSet.min}
                max={dataSet.max}
                currency={dataSet.currency}
                index={index}
                handleValue={handleValueFromChild}
              />
            ))}

            <div>
              <h1 className="py-2">Tenure</h1>
              <select name="" id="" className="border w-full p-2" onChange={(e)=>{
                setTenure(e.target.value);
              }}>
                <option value="5">5 Years</option>
                <option value="10">10 Years</option>
                <option value="15">15 Years</option>
                <option value="20">20 Years</option>
                <option value="25">25 Years</option>
              </select>
            </div>
          </section>
          <section id="chart" className='flex flex-col items-center justify-center'>
            <div>Monthly Payment: ${monthlyPayment.toFixed(2)}</div>
          <div>
      <canvas ref={canvasRef} />
    </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
