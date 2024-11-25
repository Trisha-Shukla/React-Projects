import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { fetchWeather } from '../store/thunk/weatherThunk';

const SideContainer = () => {
  const dispatch=useDispatch();
  const [index, setIndex] = useState(-1)
  const [fetchedIndices, setFetchedIndices] = useState(new Set())
  const [citySet, setCitySet] = useState(new Set()); // Initialize state for Set

  const storeWeatherData=useSelector((state)=> state.details.weatherData)

  useEffect(()=>{
    const cities=new Set();
    storeWeatherData.forEach((data)=>cities.add(data.cityName));
    setCitySet(cities);
    console.log(cities);
    
  },[storeWeatherData])
  
  const cityArray=["London","New York","Los Angeles","Las Vegas"];
  
  const getWeatherButton = () => {
    if (citySet.size < cityArray.length) {
      let nextIndex = (index + 1) % cityArray.length;
      while (citySet.has(cityArray[nextIndex])) {
        nextIndex = (nextIndex + 1) % cityArray.length;
      }
      dispatch(fetchWeather(cityArray[nextIndex]));
      setIndex(nextIndex);
    }
  };

  return (
    <div
      className="flex flex-col items-start gap-4 md:w-[25%] w-full h-full p-6"
      style={{ boxShadow: '10px 0 15px -3px rgb(0, 0, 0)' }}
    >
      <h1 className="bg-bgColor text-white text-2xl w-full p-2 rounded-md text-center cursor-pointer active:scale-95 transition-transform duration-200 ease-in-out" onClick={getWeatherButton}>
        Get Weather
      </h1>
      <table className="table-auto w-full border-collapse border border-gray-600">
        <thead>
          <tr className="bg-bgColor text-white text-lg border-b border-gray-600">
            <th className="p-2 text-center">City</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {
            cityArray.map((data,idx)=>(
          <tr className={`  ${citySet.has(data)?"border-8 border-green-700":"border-b border-gray-600"}`} key={"cityData"+idx}>
            <td className="p-4 text-center"  id={data}>{data}</td>
          </tr>

            ))
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default SideContainer;
