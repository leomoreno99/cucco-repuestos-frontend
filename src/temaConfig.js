import { createTheme } from '@mui/material/styles';

const theme = createTheme({

    palette: {
        primary: {
            main: "#FFF",
            light: "#FB756C",
            dark: "#CB271B",
            contrastText: "#F44336"
        },
        secondary: {
            main: "#F44336",
            light: "#FB756C",
            dark: "#CB271B",
            contrastText: "#FFF"
        }
    }

})

export default theme;