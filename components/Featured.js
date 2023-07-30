
import MealCard from "./MealCard";
import {useState, useEffect} from 'react'
import {useQuery } from '@tanstack/react-query';
import styles from '../styles/Featured.module.css'
import { Typography } from "@mui/material";






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
        <div className={styles.container}>

            <div className={styles.title}>
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


            <div className={styles.cards}>

                <div className="card1">
                    <MealCard/>
                </div>

                <div className="card1">
                <MealCard/>
                </div>

                <div className="card1">
                <MealCard/>
                </div>

            </div>
        </div>
      );
}
 
export default Featured;