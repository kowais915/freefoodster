
import MealCard from "./MealCard";
import {useState, useEffect} from 'react'
import {useQuery } from '@tanstack/react-query';
import styles from '../styles/Featured.module.css'
import { Typography } from "@mui/material";
import NewCard from './NewCard'






const Featured = () => {
    const [data, setData] = useState([])

    // useEffect(()=>{
    //     const getData = async ()=>{
    //         const response = await fetch("https://freefoodster-api.up.railway.app/api/meals/all")
    //         const data = await response.json()
    //         return data
    //     }

    //     getData()
    //     .then((data)=>setData(data.json()))
    //     .catch((err)=>console.error(err));
    // }, [])

    const launchQuery = useQuery({
        queryKey: ['meals'],
        queryFn: async function(){
            const response = await fetch("https://freefoodster-api.up.railway.app/api/meals/all");
            const data = await response.json();
            setData(data);
            return data;

            
        },
        
        
    })

    console.log("Data: ", data);
    return (
        <div className="bg-teal-500 p-10 sm:p-9  ">

            <div className="text-center">
                <Typography
                    variant="h4"
                >
                    Featured Meals
                </Typography>
                <div className="paragaph">
                    <Typography
                        paragraph={true}
                    >Check out delicious meals available now</Typography>
                </div>
            </div>


            <div className="flex p-10 flex-col items-center sm:flex-row sm:p-2 sm:justify-center ">

                <div className="m-5 w-80 sm:p-2">
                    <MealCard/>
                </div>

                <div className="m-5 w-80 sm:p-2">
                <MealCard/>
                </div>

                <div className="m-5 w-80 sm:p-2">
                <MealCard/>
                </div>

            </div>
        </div>
      );
}
 
export default Featured;