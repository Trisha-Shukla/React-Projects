import {createSlice} from '@reduxjs/toolkit'
import {WarehouseDetails} from './warehouseData.js'

const warehouseSLice=createSlice({
    name:"warehouse",
    initialState:{
        listData:WarehouseDetails,
        filteredData:WarehouseDetails,
    },
    reducers:{
        searchByName: (state, action) => {
            const query = action.payload.toLowerCase();
            state.filteredData = state.listData.filter((warehouse) =>
              warehouse.name.toLowerCase().includes(query)
            );
          },
          filterByCriteria: (state, action) => {
            const { city, cluster, spaceLimit } = action.payload;
      
            state.filteredData = state.listData.filter((warehouse) => {
              const cityMatch = city ? warehouse.city === city : true;
              const clusterMatch = cluster ? warehouse.cluster === cluster : true;
              const spaceMatch = spaceLimit
                ? warehouse.space_available >= spaceLimit
                : true;
      
              return cityMatch && clusterMatch && spaceMatch;
            });
          },
          resetFilters: (state) => {
            state.filteredData = state.listData; // Reset to the full list
          },
    }
})

export const {searchByName,filterByCriteria,resetFilters}=warehouseSLice.actions;
export default warehouseSLice.reducer;