import React from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Grid,
    Paper
} from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container maxWidth="sm" sx={{ marginTop: '50px' }}>
            <Paper elevation={6} sx={{ padding: '40px', borderRadius: '10px' }}>
                <Typography variant="h4" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Welcome Back
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                    Please login to your account
                </Typography>
                <Box component="form" noValidate autoComplete="off">
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
                    <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
                        <Grid item>
                            <Link href="#" variant="body2" color="primary">
                                Forgot Password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to='/signup' variant="body2" color="primary">
                                Create an Account
                            </Link>
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ padding: '10px 0', fontWeight: 'bold', fontSize: '16px', textTransform: 'none' }}
                    >
                        Login
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;
