import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: [],
  error:null,
  loading:false,
  enterCity:"",
};

const weatherDetailSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSearch:(state,action)=>{
      console.log(action.payload);
      
      state.enterCity=action.payload
    },
    fetchStart:(state,action)=>{
        state.loading=true;
        state.error=null;
    },
    fetchWeatherData:(state,action)=>{
      
        state.weatherData.push(action.payload);
        state.loading=false;
    },
    fetcherror:(state,action)=>{
        state.error=action.payload;
        state.loading=false;
    },
    updateDescription:(state,action)=>{
      const {id,newDescription}=action.payload;
      console.log(newDescription);
      
      const city=state.weatherData.find((data)=> data.id ===id)
      if(city){
        city.description =newDescription;
      }
    },
    remove: (state, action) => {
      const index=state.weatherData.findIndex((data)=> data.id === action.payload)
      if(index !==-1){
        state.weatherData.splice(index,1);
      }
      console.log(action.payload);
      
    },
  },
});

export const { fetchStart,fetchWeatherData,fetcherror, remove,setSearch,updateDescription } = weatherDetailSlice.actions;
export default weatherDetailSlice.reducer;
