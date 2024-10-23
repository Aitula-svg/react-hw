import { useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../../config/axiosInstance";



export const useReducerAPI = () => {

const [tours,setTours] = useState([])




const getAllTours = async () => {
    try{
      const {data} = await axiosInstance.get("/tours");
      toast.success("Успешно");
      setTours(data);
  
    } catch (error) {
      toast.error(error.massage)
    }
  }
  useEffect(() => {
    getAllTours()
  },[])




return [tours]
}


