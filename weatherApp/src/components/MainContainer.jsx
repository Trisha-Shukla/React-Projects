import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, setSearch, updateDescription } from '../store/slice/detailSlice';

const MainContainer = () => {
  const [searchInput, setSearchInput] = useState(""); // Use state for search input
  const weatherData = useSelector((state) => state.details.weatherData);
  const searchValue = useSelector((state) => state.details.enterCity);
  const dispatch = useDispatch();

  const handleDescription=(e,id)=>{
      dispatch(updateDescription({id,newDescription:e.target.value}));
  }

  const handleSearch = () => {
    dispatch(setSearch(searchInput)); // Dispatch the entered search value
  };

  return (
    <div className="w-full p-4">
      {/* Search Input */}
      <div className="w-full flex justify-end mb-4">
        <div className="border border-black rounded-md overflow-hidden flex">
          <input
            type="text"
            placeholder="Enter City"
            className="outline-none border-none p-2"
            value={searchInput} // Controlled input
            onChange={(e) => setSearchInput(e.target.value)} // Update state
          />
          <button
            className="p-2 px-4 bg-bgColor text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className='overflow-x-auto'>
      <table className="table-auto w-full border-collapse border border-gray-300 text-center">
  <thead className="bg-gray-100">
    <tr>
      <th className="p-2 border border-gray-300">City</th>
      <th className="p-2 border border-gray-300">Description</th>
      <th className="p-2 border border-gray-300">Temperature (°C)</th>
      <th className="p-2 border border-gray-300">Pressure (hPa)</th>
      <th className="p-2 border border-gray-300">Humidity (%)</th>
      <th className="p-2 border border-gray-300">Action</th>
    </tr>
  </thead>
  <tbody>
    {weatherData.map((data) => (
      <tr
        key={data.id}
        className={`${ (searchValue && data.cityName.toLowerCase().includes(searchValue.toLowerCase()))? "bg-yellow-300" : ""} hover:bg-gray-100 border-b border-gray-300`}
      >
        <td className="p-2 border border-gray-300">{data.cityName}</td>
        <td className="p-2 border border-gray-300">
        {
          <input type="text" value={data.description} onChange={(e)=> handleDescription(e,data.id) } className='border-2 border-blue-400' />
        }

          </td>
        <td className="p-2 border border-gray-300">{data.temp_in_celsius}</td>
        <td className="p-2 border border-gray-300">{data.pressure_in_hPa}</td>
        <td className="p-2 border border-gray-300">{data.humidity_in_percent}</td>
        <td className="p-2 border border-gray-300 text-blue-600 cursor-pointer underline">
          <button onClick={() => dispatch(remove(data.id))}>
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


      </div>
    </div>
  );
};

export default MainContainer;
