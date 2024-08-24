import React from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Link,
    Grid,
    Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        // Perform sign-up logic here (e.g., API call)
        // Redirect to login page after successful sign-up
        navigate('/');
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: '50px' }}>
            <Paper elevation={6} sx={{ padding: '40px', borderRadius: '10px' }}>
                <Typography variant="h4" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Create Account
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                    Please fill in the details to sign up
                </Typography>
                <Box component="form" noValidate autoComplete="off" onSubmit={handleSignUp}>
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        required
                        type="password"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        variant="outlined"
                        margin="normal"
                        required
                        type="password"
                        sx={{ mb: 4 }}
                    />
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ padding: '10px 0', fontWeight: 'bold', fontSize: '16px', textTransform: 'none' }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="center" sx={{ mt: 4 }}>
                        <Grid item>
                            <Typography variant="body2">
                                Already have an account?{' '}
                                <Link href="/" color="primary">
                                    Login here
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default SignUp;
