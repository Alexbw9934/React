import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    Button,
    MenuItem,
    Box,
    Menu,
    Avatar,
    IconButton,
    Tooltip,
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    CssBaseline,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ClickAwayListener
} from '@mui/material';
import {styled, useTheme} from '@mui/material/styles';

const CustomAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1
}));

function Header() {
    const theme = useTheme();
    return (
        <>
            <CssBaseline />
            <CustomAppBar
                position="sticky"
                open= {open}
                className="!bg-indigo-500"
            >

            </CustomAppBar>
        </>
    );
}

export default Header;