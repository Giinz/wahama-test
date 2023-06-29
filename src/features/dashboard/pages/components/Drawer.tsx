import {
  Drawer as MuiDrawer,
  styled,
  Toolbar,
  IconButton,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  Button
} from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, ElectricBike, Add } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  }
}));
export interface DrawerComponentProp {
  open: boolean;
  toggleDrawer: () => void;
}
const DrawerComponent = ({ open, toggleDrawer }: DrawerComponentProp) => (
  <Drawer variant='permanent' open={open}>
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1]
      }}
    >
      <IconButton onClick={toggleDrawer}>
        <ChevronLeftIcon />
      </IconButton>
    </Toolbar>
    <Divider />
    <List component='nav'>
      <ListItemButton>
        <Button component={RouterLink} to={'createProduct'}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary='Create Product' />
        </Button>
      </ListItemButton>
      <ListItemButton>
        <Button component={RouterLink} to={'productList'}>
          <ListItemIcon>
            <ElectricBike />
          </ListItemIcon>
          <ListItemText primary='Product List' />
        </Button>
      </ListItemButton>
    </List>
  </Drawer>
);

export default DrawerComponent;
