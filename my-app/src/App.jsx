import * as React from 'react';
// import { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
import { Snackbar } from '@mui/material';


function AlertDialogue() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Cookie Settings
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Let us use cookies?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We haven&apos;t technically implemented cookies, but we could like you to allow us to use 
            &quot;cookies&quot; anyways
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href='https://www.google.com'>Disagree</Button>
          <Button openAgree={true} onClick={handleClose} autoFocus>
            Agree
          </Button>
          <Snackbar
            open={open}
            onClose={handleClose}
            message="ACCEPT THE COOKIES"
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function GetStartedButton() {
  return (
    <Button variant='contained' href='https://www.apple.com/shop/buy-iphone/iphone-16-pro'>
      Get Started
    </Button>
  )
}

  
function App() {

  return (
    <>
    <AlertDialogue/>
      <div>
        <a href="https://www.linkedin.com/in/rudra-parvate/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to Speaker!</h1>
      <div className="card">
        <GetStartedButton/>
        <p>
          Click on the button above to begin your speech practice
        </p>
      </div>
      <p className="read-the-docs">
        Click on the React logo
      </p>      
      <div>
        <p className = "read-the-docs">
          Noah Cheng&apos;s real name is Joe Jr.
        </p>
      </div>
    </>
  )
}

export default App
