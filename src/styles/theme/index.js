import { green, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: red[300]
        },
        secondary: {
            main: green[400]
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    //borderRadius: 0
                }
            },
            defaultProps: { disableRipple: true, disableElevation: true }
        }
    }
})

export default theme