import {React,useState} from 'react'
import Slider from '@mui/material/Slider';

function MySlider({ headingTop, initialValue = 0, min, max, currency, handleValue , index }) {
    return (
      <div className="p-4">
        <h1>{headingTop}</h1>
        <h2>
          {currency}
          {initialValue}
        </h2>
        <Slider
          value={initialValue}
          min={min}
          max={max}
          onChange={(e,newValue)=>{
            handleValue(index,newValue);
          }}
        />
        <div className="flex justify-between">
          <span>
            {currency}
            {min}
          </span>
          <span>
            {currency}
            {max}
          </span>
        </div>
      </div>
    );
  }
  
export default MySlider

              
              