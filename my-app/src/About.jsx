import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';

import yhomasPhoto from './assets/ti_yhomas.jpg';
import rudraPhoto from './assets/rudra-parvate.jpg';
import peterPhoto from './assets/peter-santaboi2.jpg';
import noahPhoto from './assets/joe-jr2.jpg';



const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function HandleHomeClick() {
    navigate("/");
  }

  function HandleAboutClick() {
    navigate("/about");
  }

  function HomeButton() {
    return (
      <ListItem key="Home" disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }} onClick={HandleHomeClick}> {/* Added onClick handler */}
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
    );
  }

  function AboutButton() {
    return (
      <ListItem key="About" disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }} onClick={HandleAboutClick}>
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
    );
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }} align='center'>
        Speaker
      </Typography>
      <Divider />
      <List>
        <HomeButton /> {/* Added HomeButton */}
        <AboutButton /> {/* Added AboutButton */}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button sx={{ color: '#fff' }} onClick={HandleHomeClick}>Home</Button> {/* Added onClick handler */}
            <Button sx={{ color: '#fff' }} onClick={HandleAboutClick}>About</Button>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
          >
            Speaker
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* Add your main content here */}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


function StandardImageList() {
  return (
    <ImageList sx={{ width: 1000, height: 1000 }} cols={4} rowHeight={0}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <Typography sx={{ marginBottom: 2 }} 
          typography={'subtitle2'}
          fontWeight={'light'} >
          {item.title}
          </Typography>
          <Typography sx={{ marginBottom: 5 }} 
          typography={'subtitle2'}>
          {item.bio}
          </Typography>
          <Typography sx={{ marginBottom: 0 }} 
          typography={'subtitle2'}
          color='gray'>
          {item.linkedIn}
          </Typography>
        </ImageListItem>
        
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: yhomasPhoto,
    title: 'Thomas Yi',
    bio: "Hello! I am Thomas Yi, a Computer Science student at Northeastern University.",
    linkedIn: <Link href="https://www.linkedin.com/in/yhomasti/">LinkedIn</Link>
  },
  {
    img: rudraPhoto,
    title: 'Rudra Parvate',
    bio: "Hi! I'm Rudra, and I am currently enrolled at Northeastern University studying Computer Science and Business.",
    linkedIn: <Link href="https://www.linkedin.com/in/rudra-parvate/">LinkedIn</Link>
  },
  {
    img: peterPhoto,
    title: 'Peter SantaLucia',
    bio: "Hello! I am Peter SantaLucia, a Computer Science student at Northeastern University.",
    linkedIn: <Link href="https://www.linkedin.com/in/peter-santalucia/">LinkedIn</Link>
  },
  {
    img: noahPhoto,
    title: 'Noah Cheng',
    bio: "Hi, I am Noah Cheng, a Computer Science student at Northeastern University.",
    linkedIn: <Link href="https://www.linkedin.com/in/rudra-parvate/">LinkedIn</Link>
  }
];

  
function About() {

  return (
    <>
    <DrawerAppBar/>
    <div/>
    <div>
        <Typography sx={{ marginBottom: 2 }}>
            Hello! Welcome to Speaker!
        </Typography>
        <Typography sx={{ marginBottom: 1 }}>
          This project was developed by 4 Northeastern University students as part of Club Oasis.
        </Typography>
        <Typography sx={{ marginBottom: 3 }}>
          Thomas Yi, Rudra Parvate, Peter SantaLucia, and Noah Cheng.
        </Typography>
        <Box sx={{ border: 1 }} color={ 'gray' }/>
        <StandardImageList/>
        <Box sx={{ border: 1 }} color={ 'gray' }/>
        <Typography sx={{ marginBottom: 2 }}>
          The purpose of this project is to provide a platform for people to practice their public speaking skills.
        </Typography>
    </div>
    </>
  )
}

export default About;
