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
    InputBase,
    Menu,
    MenuItem,
    Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle'
import {styled, useTheme, alpha } from '@mui/material/styles';

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

const CustomDrawer = styled(Drawer, {
    shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: noWrap,
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));

const openedMixin = theme => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
});

const closedMixin = theme => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        },
  }));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
        },
    },
}));

function Header() {
    const theme = useTheme();
    const location = useLocation();
    const [open, sidebarToggle] = useState(false);
    const [auth, statusAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleSideBar = event => {
        event.preventDefault();
        event.stopPropagation();
        sidebarToggle(true);
    }

    const closeSideBar = () => {
        sidebarToggle(false);
    }

    const handleAuth = event => {
        statusAuth(ture);
    }

    const handleLogout = () => {
        statusAuth(false);
        setAnchorEl(null);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <CssBaseline />
            <CustomAppBar 
                position = "sticky" 
                open = {open} 
                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 !mb-5"
            >
                <Toolbar>
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
                                display: { xs: 'none', md: 'block' },
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
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <nav className="ml-auto">
                            <ul>
                                {pages.map((page, index) => (
                                    <NavLink to={page.url} key={index} className="mr-2">
                                        {page.name}
                                    </NavLink>
                                ))}
                            </ul>
                        </nav>
                    </Box>
                    {auth && (
                        <div className='ml-auto'>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleLogout}>Sign out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </CustomAppBar>
            <ClickAwayListener onClickAway={closeSideBar}>
                <CustomDrawer
                    variant="permanent"
                    open={open}
                    className={open ? 'visible' : 'invisible xl:visible'}
                >

                </CustomDrawer>
            </ClickAwayListener>
        </>
    );
}

export default Header;