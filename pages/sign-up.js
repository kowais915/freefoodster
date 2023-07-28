import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { EmailRounded, SecurityRounded } from '@mui/icons-material';
import { Button, Card, CardContent, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';


export default function Signup() {
    const isMobile = useMediaQuery('(max-width:600px)');

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nameError, setNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');


    const handleSubmit = () => {

        setNameError('');
        setEmailError('');
        setPasswordError('');

        if (name.trim() === '') {
            setNameError('Name is required.');
        }
        if (email.trim() === '') {
            setEmailError('Email is required.');
        }
        if (password.trim() === '') {
            setPasswordError('Password is required.');
        }

        const formValues = {
            name,
            email,
            password,
        };
        console.log('Form Values:', formValues);
    };

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#FFFFFF',
            }}
        >
            <div >
                <Typography
                    variant="h6"
                    sx={{
                        textAlign: isMobile ? "center" : "left",
                        fontSize: isMobile ? '1rem' : '1.2rem',
                        maxWidth: isMobile ? '100%' : 300,
                        mb: 3,
                        mx: 'auto',
                        mt: isMobile ? 2 : "auto"
                    }}
                >
                    <span style={{ color: '#35A29F', fontWeight: 'bold' }}>FreeFoodster</span> - Free food for everyone, everywhere
                </Typography>
                <Card
                    sx={{
                        maxWidth: isMobile ? '100%' : 350,
                        mx: 'auto',
                        px: isMobile ? '.3rem' : '1rem',
                        py: isMobile ? '2rem' : '3rem',
                        backgroundColor: '#FAFAFA',
                        my: isMobile ? 5 : "auto"
                    }}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountCircle sx={{ color: '#35A29F', mr: 1, my: 0.5 }} />
                            <TextField
                                id="input-with-sx"
                                label="Name"
                                variant="standard"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={Boolean(nameError)}
                                helperText={nameError}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: '1rem' }}>
                            <EmailRounded sx={{ color: '#35A29F', mr: 1, my: 0.5 }} />
                            <TextField
                                id="input-with-sx"
                                label="Email"
                                type="email"
                                variant="standard"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={Boolean(emailError)}
                                helperText={emailError}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <SecurityRounded sx={{ color: '#35A29F', mr: 1, my: 0.5 }} />
                            <TextField
                                id="input-with-sx"
                                label="Password"
                                type="password"
                                variant="standard"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={Boolean(passwordError)}
                                helperText={passwordError}
                            />
                        </Box>
                        <Button
                            variant="contained"
                            color="warning"
                            sx={{ backgroundColor: '#35A29F', mt: 4, px: isMobile ? '4rem' : '7rem', color: 'white' }}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                            Already have an account?{' '}
                            <Link legacyBehavior href="/sign-in">
                                <a style={{ fontWeight: 'bold', color: '#35A29F', textDecoration: 'none' }}>Sign in</a>
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <Box
                sx={{

                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#97FEED',
                }}
            >
                <img src="https://thumbs.gfycat.com/AmusedFairCollardlizard.webp" alt="animation" style={{ width: isMobile ? '200px' : '300px', height: isMobile ? '200px' : '300px' }} />
            </Box>
        </Box>
    );
}
