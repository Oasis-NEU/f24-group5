
import Button from '@material-ui/core/Button';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';

export default function ResultsPage() {
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