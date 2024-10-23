import React, { useEffect, useState } from 'react'
import { TourForm } from '../components/Tour/TourForm'
import { axiosInstance } from '../config/axiosInstance'
import { toast } from 'react-toastify';
import { TourList } from '../components/Tour/TourList';
import { useReducerAPI } from '../components/hooks/useReducerAPI';




const MainPage = () => {
const [tours] = useReducerAPI()
// const [tours,setTours] = useState([])

// const getAllTours = async () => {
//   try{
//     const {data} = await axiosInstance.get("/tours");
//     toast.success("Успешно");
//     setTours(data);

//   } catch (error) {
//     toast.error(error.massage)
//   }
// }
// useEffect(() => {
//   getAllTours()
// },[])
  return (
    <div>
      {/* <TourForm /> */}
      <TourList  tours={tours}/>
    </div>
  )
}

export default MainPage
