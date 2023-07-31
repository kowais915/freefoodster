import {styled} from 'styled-components'
import styles from '../styles/Footer.module.css'
import { Typography } from '@mui/material';

const Footer = () => {
    return ( 
            <footer className={styles.container}>

                <Typography

                    variant='h4'
                    align='center'
                >
                    FreeFoodster

                </Typography>

                

            </footer>
     );
}


const FooterContainer = styled.div`
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: beige;


`


 
export default Footer;