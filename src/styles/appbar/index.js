import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import '@fontsource/montez'
import { pink } from "@mui/material/colors";


export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

}))

export const AppbarHeader = styled(Typography)(() => ({
    fontFamily: '"Montez", "curve"',
    fontSize: '4rem',
    color: pink[400]

}))