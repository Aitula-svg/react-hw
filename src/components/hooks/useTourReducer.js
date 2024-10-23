import { useReducer, } from "react";
import { TOUR_REDUCER_TYPE } from "../../utils/constans";
import { reducer } from "../../utils/generals/reducer";



const initialState = {
    title: "",
    imageUrl: "",
    price: "",
    description: "",
    date: "",
  };

const useToggleAPI = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  

  

  const titleChangehandler = (event) => {
    dispatch({ type: TOUR_REDUCER_TYPE.TITLE, payload: event.target.value });
  };

    const imageChangehandler = (event) => {
    dispatch({
      type: TOUR_REDUCER_TYPE.IMAGE_URL,
      payload: event.target.value,
    });
  };

    const priceChangehandler = (event) => {
    dispatch({ type: TOUR_REDUCER_TYPE.PRICE, payload: event.target.value });
  };

  const dateChangehandler = (event) => {
    dispatch({ type: TOUR_REDUCER_TYPE.DATE, payload: event.target.value });
  };
  const descriptionChangehandler = (event) => {
    dispatch({
      type: TOUR_REDUCER_TYPE.DESCRIPTION,
      payload: event.target.value,
    });
  };

  return [state,titleChangehandler,imageChangehandler,priceChangehandler,dateChangehandler,descriptionChangehandler]
};



export default useToggleAPI;
