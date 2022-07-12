import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import {
    AppBar,
    CssBaseline,
    Toolbar,
    IconButton,
    Typography,
    Box,
    ClickAwayListener,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {styled, useTheme} from '@mui/material/styles';

const pages = [
    {
        url: "home",
        name: "Home",
    },
    {
        url: "platform",
        name: "Platform",
    },
    {
        url: "faq",
        name: "FAQ",
    },
    {
        url: "signup",
        name: "Sing Up",
    },
    {
        url: "signin",
        name: "Sign In",
    }
];

const drawerWidth = 240;

const CustomAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

function Header() {
    const theme = useTheme();
    const location = useLocation();
    const [open, sidebarToggle] = useState(false);

    const handleSideBar = event => {
        event.preventDefault();
        event.stopPropagation();
        sidebarToggle(true);
    }

    return (
        <>
            <CssBaseline />
            <CustomAppBar 
                position = "sticky" 
                open = {open} 
                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 !mb-5"
            >
                <Toolbar className="!float-right">
                    {!open && (
                        <IconButton
                            size="large"
                            edge="start"
                            onClick={handleSideBar}
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 4 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    {!open && (
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    )}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            justifyContent: 'center',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <nav className="ml-auto">
                            <ul>
                                {pages.map((page, index) => (
                                    // <Button
                                    //     key={page}
                                    //     component="a"
                                    //     href={`/${page.toLowerCase()}`}
                                    //     onClick={handleCloseNavMenu}
                                    //     sx={{ my: 2, color: 'white', display: 'block' }}
                                    // >
                                    //     {page}
                                    // </Button>
                                    <NavLink to={page.url} key={index} className="mr-2">
                                        {page.name}
                                    </NavLink>
                                ))}
                            </ul>
                        </nav>
                    </Box>
                </Toolbar>
            </CustomAppBar>
        </>
    );
}

export default Header;