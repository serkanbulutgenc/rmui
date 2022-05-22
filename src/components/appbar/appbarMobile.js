import React from 'react';
import { AppBar, Toolbar, Typography } from "@mui/material"
import { AppbarContainer, AppbarHeader } from "../../styles/appbar"

function AppbarMobile({ matches }) {
    return (
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
        </AppbarContainer>
    )
}

export default AppbarMobile