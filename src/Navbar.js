import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';
import { Avatar } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
    },
    grow:{
        flexGrow:1,
    },
    mainLogo: {
       color: "white",
        justifyContent: "left",

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    container: {
        width: 1170,
        margin: "auto"
    },
    avatar: {
        height: "80px",
        width:"95px",
        borderRadius: 0,
     

    },
    
}));
function Navbar() {
    const classes = useStyles();
  
 
    return (
 
            <div className={classes.root}>
            <AppBar position="fixed" style={{
                backgroundColor: "#212121", color: "white"
            }}>
                <Grid item sm={12} xs={12} className={classes.container}>
                <Toolbar   >
                        <Grid className={classes.grow}>
                            <Button className={classes.mainLogo}>
                                <Avatar src="https://webstockreview.net/images/clipart-camera-artwork-15.png"  className={classes.avatar} />
                            </Button>
                        </Grid>
                   
                        <Button style={{ marginRight: "10px" }}>
                            <Typography  ><NavLink to="/quotes" style={{ color: "#ffc400", fontFamily: "cursive", fontWeight: 600 ,textDecoration:"none"}} fontSize="large">Quotes</NavLink></Typography>
                        </Button>
                     
                        <Button style={{ marginRight: "10px" }} >
                            <Typography  ><NavLink to="/jokes" style={{ color: "#ffc400", fontFamily: "cursive", fontWeight: 600, textDecoration: "none" }} fontSize="large">Jokes</NavLink></Typography>
                        </Button>

        
                    </Toolbar>
                    </Grid>
                </AppBar>
            </div>
    );
}

export default Navbar;
