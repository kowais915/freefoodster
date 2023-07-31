import styles from '../styles/Working.module.css'
import Button from '@mui/material/Button';
import WorkingCard from './WorkingCard';

import { Typography } from '@mui/material';


const Working = () => {
    return ( 
        <div className='flex p-35 m-10 text-center flex-col sm:flex-row sm:justify-around'>

            <div className={styles.left}>

                    <Typography
                        variant='h4'
                        className=' '
                        
                    >
                        How It Works
                    </Typography>
                    <div>
                        <Typography
                           
                            paragraph={true}
                            className=''

                        >
                            Share a meal in 3 simple steps
                        </Typography>
                    </div>
            </div>

            
            <div className='flex flex-col items-center '>
                <div className={styles.card}>

                    <WorkingCard
                        step="Step 1"
                        description="Post details about the meal you want to share"
                    />
               
                </div>

                <div className={styles.card}>

                    <WorkingCard
                            step="Step 2"
                            description="Someone in need will find your listing and will get in contact with you."
                    />
               
                </div>

                <div className={styles.card}>
                    <WorkingCard
                                step="Step 3"
                                description="Get into contact and then at the end, share the meal."
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Working;