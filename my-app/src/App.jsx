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
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import Popover from '@mui/material/Popover';

import About from './About'
import Create from './inputSpeech'
import RecordingPage from './RecordingPage'
import ResultsPage from './ResultsPage'

import DrawerAppBar from './DrawerAppBar'


var cookiesAccepted = false;


function CookiesBanner() {
  const [bannerOpen, setBannerOpen] = React.useState(true);

  const closeBanner = () => {
    setBannerOpen(false);
    cookiesAccepted = true;
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
                <Button size="small" href='https://www.google.com'>
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

function GetStartedButton() {
  const navigate = useNavigate();

  function HandleGetStartedClick() {
    if (!cookiesAccepted) {
      alert("Please accept cookies before continuing");
      return;
    }
    else {
      navigate("/inputspeech");
    }
  }
  
  return (
    <Button variant='contained' onClick={HandleGetStartedClick}>
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

function RecorderIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  
  return (
    <div>
      <a href="mailto:santalucia.p@northeastern.edu" target="_blank">
        <RecordVoiceOverIcon fontSize='large'
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}/>
      </a>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>Any questions, comments, or concerns? Click here.</Typography>
      </Popover>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/inputspeech" element={<Create />} />
        <Route path="/RecordingPage" element={<RecordingPage />} />
        <Route path="/results" element={<ResultsPage />} />
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
        <RecorderIcon />
      </div>
      <h1>Welcome to Speaker! </h1>
      <div className="card">
        <GetStartedButton />
        <p>Click on the button above to begin your speech practice</p>
        <Divider />
        <p className="read-the-docs">
        </p>
      </div>
      <AboutButton />
    </>
  );
}
export default App