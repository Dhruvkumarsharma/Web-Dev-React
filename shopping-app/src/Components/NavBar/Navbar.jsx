import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    tool: {
        position: "relative"
    }
}));
const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.tool}>
                    <Typography variant="h6" className="classes.title">
                        Shopping App
                    </Typography>
                        <Button color="inherit" style={{ display:'flex', justifyContent:'flex-end'}}>Cart<ShoppingCartIcon  style={{  marginLeft: '12%', marginRight: '1%' }} /><span className='cartNumber' style={{}}>{10}</span></Button>
                </Toolbar>
            </AppBar>

        </div>
    );
}

export default Navbar;