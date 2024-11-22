import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { Typography, Button } from '@mui/material';
import { ReactMediaRecorder } from 'react-media-recorder';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation } from 'react-router-dom';

function GoBackButton() {
  const navigate = useNavigate();

  function HandleBackClick() {
    const confirmBack = window.confirm("You will have to restart if you continue back. Do you want to proceed?");
    if (confirmBack) {
      navigate("/inputspeech");
    }
  }

  return (
    <Button variant='text' onClick={HandleBackClick}>
      <ArrowBackIcon /> Back
    </Button>
  )
}



export default function RecordingPage() {
  const location = useLocation();
  const { details } = location.state || {};

  return (
    <>
      <CssBaseline />
      <div style={{ position: 'relative', paddingTop: '50px' }}>
        <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
          <GoBackButton />
        </div>
        <Typography variant="h7" sx={{ my: 2, mb: 4 }} align='center' marginBottom={'50px'}>
          Begin recording on your own time (beginning a new recording will stop the current one).
        </Typography>
        <ReactMediaRecorder
          audio
          mimeType="audio/wav"
          render={({ startRecording, stopRecording, mediaBlobUrl }) => (
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  console.log('Recording started');
                  startRecording();
                }}
              >
                Start Recording
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  console.log('Recording stopped');
                  stopRecording();
                }}
                sx={{ ml: 2 }}
              >
                Stop Recording
              </Button>
              {mediaBlobUrl && (
                <a href={mediaBlobUrl} download="recording.wav" style={{ display: 'block', marginTop: '20px', marginBottom: '50px' }}>
                  Download Recording
                </a>
              )}
            </div>
          )}
        />
        <Typography variant="body1" sx={{ my: 10 }} align='center'>
            {details}
          </Typography>
      </div>
    </>
  );
}