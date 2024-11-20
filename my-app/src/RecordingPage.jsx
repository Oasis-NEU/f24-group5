import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { Typography, Button } from '@mui/material';
import { ReactMediaRecorder } from 'react-media-recorder';

export default function RecordingPage() {
  return (
    <>
      <CssBaseline />
      <div>
        <Typography variant="h7" sx={{ my: 2 }} align='center'>
          Begin recording on your own time (beginning a new recording will stop the current one).
        </Typography>
        <ReactMediaRecorder
          audio
          mimeType="audio/wav"
          render={({ startRecording, stopRecording, mediaBlobUrl }) => (
            <div style={{ textAlign: 'center' }}>
              <Button variant="contained" color="primary" onClick={startRecording}>
                Start Recording
              </Button>
              <Button variant="contained" color="secondary" onClick={stopRecording} sx={{ ml: 2 }}>
                Stop Recording
              </Button>
              {mediaBlobUrl && (
                <audio src={mediaBlobUrl} controls style={{ display: 'block', marginTop: '20px' }} />
              )}
            </div>
          )}
        />
      </div>
    </>
  );
}