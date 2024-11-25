import {fetchStart,fetchWeatherData,fetcherror} from '../slice/detailSlice'
import axios from 'axios'

export const fetchWeather=(cityName)=>async(dispatch)=>{
    dispatch(fetchStart());
    try {
        const res = await axios(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`);
        const weatherDetails={...res.data,cityName,id:Date.now()}
        dispatch(fetchWeatherData(weatherDetails));
    } catch (error) {
        dispatch(fetcherror("Error fetching data "));
        console.error("Error fetching data ",error)
    }
}