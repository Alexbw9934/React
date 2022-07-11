import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    AppBar,
    CssBaseline,
} from '@mui/material';
import {styled, useTheme} from '@mui/material/styles';

const CustomAppBar = styled(AppBar, {
    shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => {
    zIndex: theme.zIndex.drawer + 1,

});

function Header() {
    const theme = useTheme();
    <>
        <CssBaseline />
        <CustomAppBar>

        </CustomAppBar>
    </>
}

export default Header;