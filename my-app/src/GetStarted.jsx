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
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const drawerWidth = 240;
const navItems = ['Home', 'About'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
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

export default function BasicTextFields() {
const classes = useStyles()
const [speech, setSpeech] = useState('')
const [speechError, setSpeechError] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault()
  setSpeechError(false)

  if (speech == '') {
    setSpeechError(true)
  }
  if (speech) {
    console.log(speech)
  }
}

    return (
      <Container size ="sm">
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '100ch'} }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
              onChange={(e) => setSpeech(e.target.value)}
              id="standard-multiline-static" 
              label="Input speech text here"
              multiline 
              helperText={'Click submit to start practicing'} 
              rows={10} 
              variant="outlined"
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}>
            Submit
          </Button>
        </Box>
      </Container>
    );
  }
  
function GetStarted() {

  return (
    <>
    <DrawerAppBar/>
    <div/>
    <div>
        <Typography sx={{ marginBottom: 2 }}>
            Paste your speech in the box bellow!
        </Typography>
        <BasicTextFields/>
    </div>
    </>
  )
}