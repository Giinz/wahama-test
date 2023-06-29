import {
  Avatar,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  Grid,
  Link
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { LoginPayload, login } from '../authSlice';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const LoginPage = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const errorMessage = useAppSelector((state) => state.auth.errorMessage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState<LoginPayload>({
    username: '',
    password: ''
  });
  const [errMsg, setErrMsg] = useState<string | undefined>(errorMessage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormLogin({ ...formLogin, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(formLogin));
    setErrMsg(errorMessage);
  };
  const handleFocus = () => {
    setErrMsg('');
  };

  useEffect(() => {
    if (isLoggedIn) navigate('/dashboard');
  }, [isLoggedIn, navigate]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        {errMsg && (
          <Typography variant='h6' color={'red'}>
            {errMsg}
          </Typography>
        )}

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='username'
              onChange={handleChange}
              onFocus={handleFocus}
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              onFocus={handleFocus}
              onChange={handleChange}
              autoComplete='current-password'
            />
            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default LoginPage;
