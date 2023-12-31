import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';

import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useTheme } from '@mui/material/styles';

import { Sidebar } from '..'

import useStyles from './styles';

const NavBar = () => {
    const [mobileOpen, setmobileOpen] = useState(false)
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const isAuthenticated = true;

    return (
        <>
            <AppBar position='fixed'>
                <Toolbar className={classes.toolbar}>
                    {isMobile && (
                        <IconButton
                            color='inherit'
                            edge='start'
                            style={{ outline: 'none' }}
                            onClick={() => { }}
                            className={classes.menuButton}
                        >
                            <Menu />
                        </IconButton>
                    )}
                    <IconButton color='inherit' sx={{ ml: 1 }} onClick={() => { }} >
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    {!isMobile && 'Search...'}
                    <>
                        {!isAuthenticated ? (
                            <Button color='inherit' onClick={() => { }} >
                                Login &nbsp; <AccountCircle />
                            </Button>
                        ) : (
                            <Button color='inherit' component={Link}
                                to="/profile/:id"
                                className={classes.linkButton}
                                onClick={() => { }}
                            >
                                {!isMobile && <>My Movies &nbsp;</>}
                                <Avatar style={{ width: '30', height: '30' }} alt="Profile Picture" src="https://source.boringavatars.com/marble" />
                            </Button>
                        )}
                    </>
                    {isMobile && 'Search...'}
                </Toolbar>
            </AppBar>
            <>
                <nav className={classes.drawer}>
                    {isMobile ? (
                        <Drawer variant='temporary'
                            anchor='right'
                            open={mobileOpen}
                            className={classes.drawerBackground}
                            classes={{ paper: classes.drawerPaper }}
                            ModalProps={{ keepMounted: true }}
                        >
                            <Sidebar setmobileOpen={setmobileOpen} />
                        </Drawer>
                    ) : (
                        <Drawer classes={{ paper: classes.drawerPaper }} variant='permanent' open>
                            <Sidebar setmobileOpen={setmobileOpen} />
                        </Drawer>
                    )}
                </nav>
            </>
        </>
    )
}

export default NavBar