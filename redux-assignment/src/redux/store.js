import { applyMiddleware, legacy_createStore } from "redux";
import  carReducer  from "./reducers/car.reducer";
import thunk from 'redux-thunk';

const initState = {
	cars: [],
	error: "",
	loading: false,
  };

const store = legacy_createStore(carReducer,initState,applyMiddleware(thunk));
 export default store;