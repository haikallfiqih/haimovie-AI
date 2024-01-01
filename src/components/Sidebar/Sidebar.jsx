import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useTheme } from '@mui/styles';

import useStyles from './styles';

const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <>
            <Link to="/" className={classes.imageLink}>
                <img alt='logo' className={classes.image} src={theme.palette.mode === 'light' ? redLogo : blueLogo} />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
            </List>
        </>
    )
}

export default Sidebar