import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import AppbarDesktop from './appbarDesktop'
import AppbarMobile from './appbarMobile'

function Appbar() {
    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.down('md'))


    return (
        <>
            {matches ? <AppbarMobile /> : <AppbarDesktop />}
        </>
    )
}

export default Appbar