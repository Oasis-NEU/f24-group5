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

export default function ResultLayout() {
    return (
        <CssBaseline>
        <h1>
            You were 0% accurate. I am an ai with access to the entire internet. No one in history has ever given such an idiotic presentation. Freedom of speech should be considered an unalienable right for everyone except for you.
        </h1>
            <Stack spacing={2} maxWidth={100} sx={{justifyContent: "center", alignItems: "center",}}>
                <Button
                    type="submit" 
                    color="primary" 
                    variant="contained"
                    >
                        Home
                </Button>
                <Button
                    type="submit" 
                    color="secondary" 
                    variant="contained">
                        Try Again
                </Button>
            </Stack>
        </CssBaseline>
    )
}