import axios from "axios"
import { CarActionTypes } from "../types/car.actionType"

export const fetchCarsRequest=()=>{
	return {
		type:CarActionTypes.FETCH_CAR_REQUEST,
	}
}

export const fetchCarSuccess=(cars)=>{
	return {
		type:CarActionTypes.FETCH_CAR_SUCCESS,
		payload:cars,
	}
}

export const fetchCarError=(error)=>{
	return {
		type:CarActionTypes.FETCH_CAR_ERROR,
		payload:error,
	}
}

export const fetchCars=()=>async (dispatch)=>{
	try {
		dispatch(fetchCarsRequest());
		const res = await axios.get('https://randomuser.me/api/?results=6');
		dispatch(fetchCarSuccess(res.data.results));
		
	} catch (error) {
		dispatch(fetchCarError(error.msg));
	}
}
	
