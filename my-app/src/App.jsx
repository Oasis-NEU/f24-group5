import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
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

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const drawerWidth = 240;
const navItems = ['Home', 'About'];

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


function ToggleColorMode() {
  return (
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  );
}

function CookiesBanner() {
  const [bannerOpen, setBannerOpen] = React.useState(true);

  const closeBanner = () => {
    setBannerOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <DrawerAppBar/>
      <Container component="main" sx={{ pt: 3 }}>
        <Toolbar/>
      </Container>
      <TrapFocus open disableAutoFocus disableEnforceFocus>
        <Fade appear={false} in={bannerOpen}>
          <Paper
            role="dialog"
            aria-modal="false"
            aria-label="Cookie banner"
            square
            variant="outlined"
            tabIndex={-1}
            sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              m: 0,
              p: 2,
              borderWidth: 0,
              borderTopWidth: 1,
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ justifyContent: 'space-between', gap: 2 }}
            >
              <Box
                sx={{ flexShrink: 1, alignSelf: { xs: 'flex-start', sm: 'center' } }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  This website uses cookies
                </Typography>
                <Typography variant="body2">
                  Technically, we don&apos;t use cookies, but we&apos;d like you to accept anyways.
                </Typography>
              </Box>
              <Stack
                direction={{
                  xs: 'row-reverse',
                  sm: 'row',
                }}
                sx={{
                  gap: 2,
                  flexShrink: 0,
                  alignSelf: { xs: 'flex-end', sm: 'center' },
                }}
              >
                <Button size="small" onClick={closeBanner} variant="contained">
                  Allow all
                </Button>
                <Button size="small" onClick={closeBanner} href='https://www.google.com'>
                  Reject all
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Fade>
      </TrapFocus>
    </React.Fragment>
  );
}

function ThemeModeHandler() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        minHeight: '56px',
      }}
    >
      <FormControl>
        <FormLabel id="demo-theme-toggle">Theme</FormLabel>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) => setMode(event.target.value)}
        >
          <FormControlLabel value="system" control={<Radio />} label="System" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

function GetStartedButton() {
  return (
    <Button variant='contained' href='https://www.apple.com/shop/buy-iphone/iphone-16-pro'>
      Get Started
    </Button>
  )
}


function AboutButton() {
  const navigate = useNavigate();

  function HandleAboutClick() {
    navigate("/about");
  }

  return (
    <Button variant="contained" onClick={HandleAboutClick}>
      About
    </Button>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

// Separate Main Layout for clarity
function MainLayout() {
  return (
    <>
      <CookiesBanner />
      <div>
        <a href="https://www.linkedin.com/in/rudra-parvate/" target="_blank">
          <img src={reactLogo} className="InterpreterModeIcon" alt="SPEAKER" />
        </a>
      </div>
      <h1>Welcome to Speaker! </h1>
      <div className="card">
        <GetStartedButton />
        <p>Click on the button above to begin your speech practice</p>
      </div>
      <p className="read-the-docs">Click on the React logo</p>
      <div>
        <Divider />
        <p className="read-the-docs">
          <Typography variant="subtitle1">
            Noah Cheng&apos;s real name is Joe Jr.
          </Typography>
        </p>
      </div>
      <AboutButton />
    </>
  );
}
export default App
