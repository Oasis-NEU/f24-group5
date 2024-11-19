import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './App.css';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import { BrowserRouter as Router, useNavigate, Routes, Route} from "react-router-dom";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';

import About from './About'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})


const drawerWidth = 240;

function DrawerAppBar(props) {
  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function HandleAboutClick() {
    navigate("/about");
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }} align='center'>
        Speaker
      </Typography>
      <Divider />
      <List>
        <ListItem key="Home" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="About" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} onClick={HandleAboutClick}>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
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
            <Button sx={{ color: '#fff' }}>Home</Button>
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


function Create() {
  const classes = useStyles()
  const [details, setDetails] = useState('')
  const [detailsError, setDetailsError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setDetailsError(false)

    if (details == '') {
      setDetailsError(true)
    }
    if (details) {
      console.log(details)
    } 
  }

  return (
    <React.Fragment>
      <CssBaseline />
        <Typography
          variant="h6" 
          color="TextPrimary"
          component="h2"
          gutterBottom
        >
          Input your speech text here
        </Typography>
  
        <form noValidate autoComplete="off" onSubmit={handleSubmit} fullWidth >
          <TextField fullWidth className={classes.field}
            onChange={(e) => setDetails(e.target.value)}
            label="Speech text"
            variant="outlined"
            color="Primary"
            multiline
            rows={10}
            error={detailsError}
          />

          <Button
            type="submit" 
            color="primary" 
            variant="contained">
            Submit
          </Button>
        </form>

    </React.Fragment>
  )
}

export default Create;