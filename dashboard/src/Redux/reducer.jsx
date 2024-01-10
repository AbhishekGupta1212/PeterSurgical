import { CHANGE_DATA } from "./ActionType.js";
import { data } from "./data";


  
  
const initialState = {
  data:{
    emmissions:[1790, 2205, 2345,1503, 4634,4634,2487,3209,1245,1765,872,986],
    revenue:[5250,4350,1200,3000,2100 ,1020,2010,4800,8040,4530,3252,6330]
  },
  pie_data:data
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
       case CHANGE_DATA: 
       return { ...state, data:payload };
    default:
      return state;
  }
};