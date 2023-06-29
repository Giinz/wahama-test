import { useEffect, useState } from 'react';

import { logout } from '../../auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Outlet, useNavigate } from 'react-router-dom';
import AppBarComponent from './components/AppBar';
import { Box } from '@mui/material';
import DrawerComponent from './components/Drawer';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const handleLogout = () => {
    dispatch(logout());
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (!isLoggedIn) navigate('/login');
  }, [isLoggedIn, navigate]);

  return (
    <Box sx={{ display: 'flex', height:'100vh' }}>
      <AppBarComponent
        open={open}
        toggleDrawer={toggleDrawer}
        auth={isLoggedIn}
        handleProfile={() => {}}
        handleLogout={handleLogout}
      />
      <DrawerComponent open={open} toggleDrawer={toggleDrawer} />
      <Outlet />
    </Box>
  );
};

export default Dashboard;
