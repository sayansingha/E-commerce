import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon } from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';
import logo from '../../assets/shop.png';
const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    
    return (
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Some shop" height="28px" className={classes.image} />
                        Apple Computers                    
                    </Typography>
                    <div className={classes.grow} />
                    { location.pathname === '/' && (
                        <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    ) }
                    
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar
