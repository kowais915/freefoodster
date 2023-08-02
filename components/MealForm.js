import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState, useEffect} from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function MealForm() {
    const [location, setLocation ] = useState('');
    const [meal, setMeal ] = useState('');
    const [persons, setPersons] = useState(0);
    const [available, setAvailabel] = useState(true);


    const data = {
        title: meal,
        location: location,
        persons: persons,
        availible: available
    }

    



  const handleSubmit = async (event) => {
    event.preventDefault();
   
    console.log({
      
        meal: meal,
        capicity: persons,
        Availibilty: available,
        location: location
    });
    const response = await fetch("https://freefoodster-api.up.railway.app/api/meals", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    const json = await response.json();

    if(response.ok){
        console.log("Posted...........!!!!!!!");
    }
    setLocation('');
    setMeal('');
    setPersons(0);
    setAvailabel(false)
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Meal Offering Form
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
           
            <TextField
              margin="normal"
              required
              fullWidth
              name="title"
              label="Meal"
              type="text"
              id="meal"
              onChange={(e)=>setMeal(e.target.value)}
              
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="location"
              label="Location"
              type="text"
              id="meal"
              placeholder='Where is this meal?'
              onChange={(e)=>setLocation(e.target.value)}
              
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="capicity"
              label="Serving Capicity"
              type="number"
              id="capicity"
              onChange={(e)=>setPersons(e.target.value)}
              
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="title"
              label="Availibility"
              type="boolean"
              placeholder='True or False'
              defaultValue='true'
              id="meal"
              onChange={(e)=>setAvailabel(e.target.value)}
              
            />
           
            <Button
              type="submit"
              fullWidth
              color='primary'
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className= "bg-teal-500"
            >
              Offer Meal
            </Button>
           
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}