import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { EmailRounded, SecurityRounded } from '@mui/icons-material';
import { Button, Card, CardContent, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Signin() {
    const router = useRouter();


    const isMobile = useMediaQuery('(max-width:600px)');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');


    const handleLogin = (e)=>{
        
        router.push("https://dev-d2vo20qce4sc28gq.eu.auth0.com/u/login?state=hKFo2SBSTE1YOTZxclVtekNwS2hpTjJvNzlQZGp3YTNIRzNtcKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHIyZHg0S3BiRURHaHVwSHNYRG9oal9fY0JGaFh1bFpro2NpZNkgUzV0bG16R3lIWklSOGllWWE5eWNBbUZtSlFTUUE4cHA");
    }


    const handleSubmit = () => {

        setEmailError('');
        setPasswordError('');

        if (email.trim() === '') {
            setEmailError('Email is required.');
        }
        if (password.trim() === '') {
            setPasswordError('Password is required.');
        }

        const formValues = {
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
                        
                        <Button
                            variant="contained"
                            className="bg-teal-500"
                            sx={{ backgroundColor: '#35A29F', mt: 4, px: isMobile ? '4rem' : '7rem', color: 'white' }}
                            onClick={(e)=>{
                                e.preventDefault()
                                handleLogin()
                            }}
                        >
                            Login
                        </Button>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                            Do not have an account?{' '}
                            <Link legacyBehavior href="/sign-up">
                                <a style={{ fontWeight: 'bold', color: '#35A29F', textDecoration: 'none' }}>Sign Up</a>
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
