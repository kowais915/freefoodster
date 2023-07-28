import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { EmailRounded, SecurityRounded } from '@mui/icons-material';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';


export default function Signup() {
    return (
        <>
            <Box
                sx={{
                    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: '#FFFFFF',
                }}
            >
                <div>
                    <Typography variant="h6" sx={{ textAlign: 'left', fontSize: "1.2rem", maxWidth: 300, mb: 3, mx: "auto", }}>
                        <span style={{ color: '#35A29F', fontWeight: 'bold' }}>FreeFoodster</span> - Free food for everyone, everywhere
                    </Typography>
                    <Card sx={{ maxWidth: 350, mx: "auto", px: "1rem", py: "3rem", backgroundColor: '#FAFAFA' }}>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircle sx={{ color: '#35A29F', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Name" variant="standard" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', my: '1rem' }}>
                                <EmailRounded sx={{ color: '#35A29F', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Email" variant="standard" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <SecurityRounded sx={{ color: '#35A29F', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Password" type="password" variant="standard" />
                            </Box>
                            <Button variant="contained" color="warning" sx={{ backgroundColor: '#35A29F', mt: 4, px: 7, color: 'white' }}>Sign Up</Button>
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
                    <img src="/images/cupcake.gif" alt="animation" style={{ width: '300px', height: '300px' }} />
                </Box>
            </Box >
        </>
    );
}
