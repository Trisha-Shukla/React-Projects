import React from 'react'
import { useDispatch } from 'react-redux';
import { filterByCriteria, resetFilters } from '../store/slice/warehouseSlice';
import { useState } from 'react';

const FilterBar = () => {
    const [city, setCity] = useState('');
  const [cluster, setCluster] = useState('');
  const [spaceLimit, setSpaceLimit] = useState('');
    const dispatch=useDispatch();

    const applyFilters=()=>{
        dispatch(filterByCriteria({city,cluster,spaceLimit:parseInt(spaceLimit)}));
    }
    const resetAllFilters = () => {
        setCity('');
        setCluster('');
        setSpaceLimit('');
        dispatch(resetFilters());
      };
  return (
    <div className='flex flex-col lg:flex-row gap-2'>
        <div className='flex gap-2 '>

        <select value={city} onChange={(e) => setCity( e.target.value)} className='p-2 text-xl text-red-950 rounded-md border-2 border-red-950'>
            <option value="">All Cities</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Indore">Indore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Guwahati">Guwahati</option>
        </select>
        <select value={cluster} onChange={(e) => setCluster( e.target.value)} className='p-2 text-xl text-red-950 rounded-md border-2 border-red-950'>
            <option value="">All Clusters</option>
            <option value="cluster-a-32">cluster-a-32</option>
            <option value="cluster-a-1">cluster-a-1</option>
            <option value="cluster-a-21">cluster-a-21</option>
            <option value="cluster-a-2">cluster-a-2</option>
            <option value="cluster-v-2">cluster-v-2</option>
        </select>
        </div>
        <input
            value={spaceLimit}
            type="number"
            placeholder="Minimum space"
            onChange={(e) => setSpaceLimit( e.target.value)}
            className='p-2 text-xl text-red-950 rounded-md border-2 border-red-950 placeholder-red-950'
        />
        <button onClick={applyFilters} className="bg-red-950 text-white p-2 rounded-md">
        Apply Filters
      </button>

      <button onClick={resetAllFilters} className="bg-red-950 text-white p-2 rounded-md">
        Reset Filters
      </button>
    </div>
  )
}

export default FilterBar