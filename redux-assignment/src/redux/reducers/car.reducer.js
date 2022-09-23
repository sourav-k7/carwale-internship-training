import { CarActionTypes } from "../types/car.actionType";

const initState = {
  cars: [],
  error: "",
  loading: false,
};

const carReducer = (state = initState, action) => {
  switch (action.type) {
    case CarActionTypes.FETCH_CAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CarActionTypes.FETCH_CAR_SUCCESS:
      return {
        ...state,
        cars: [...state.cars, ...action.payload],
        loading: false,
      };
    case CarActionTypes.FETCH_CAR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
