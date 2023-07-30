import Button from "@mui/material/Button"
import { Typography } from '@mui/material';
import styles from '../styles/Hero.module.css'

const Hero = () => {
    return (
       <div className={styles.container}>

            <Typography
                variant="h3"
                mb={2}
            >
             Welcome to FreeFoodster!
            </Typography>
                
            

            <Typography
                variant="p"

            >
                Help Feed the Poor
            </Typography>

            <Typography
                mt={3}
            >
                <Button
                    variant='contained'
                    mt={10}
                    className={styles.button}
                >
                    Get Started.
                </Button>
            </Typography>

            
       </div>
      );
}





 
export default Hero;