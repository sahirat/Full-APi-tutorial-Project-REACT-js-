import React, { useState, useEffect } from 'react';
import './Jokes.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';
import { Avatar } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import ImportExportIcon from '@material-ui/icons/ImportExport';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    grow: {
        flexGrow: 1,
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
        width: "95px",
        borderRadius: 0,


    },

}));
function Jokes() {
    const classes = useStyles();
    const [joke, setJokes] = useState("");
    const [punchline, setPunchline] = useState("");
    const getJokes = () => {
        fetch("https://official-joke-api.appspot.com/random_joke").then((res) => res.json())
            .then((data) => {
                setJokes(data.setup);
                setPunchline(data.punchline);
            })
    }

    useEffect(() => {
        getJokes();
    }, [])
    return (
        <>
            <div className={classes.root}>
                <AppBar position="fixed" style={{
                    backgroundColor: "#212121", color: "white"
                }}>
                    <Grid item sm={12} xs={12} className={classes.container}>
                        <Toolbar   >
                            <Grid className={classes.grow}>
                                <Button className={classes.mainLogo}>
                                    <NavLink to="/" style={{ color: "#ffc400", fontFamily: "cursive", fontWeight: 600, textDecoration: "none" }} fontSize="large"><Avatar src="https://webstockreview.net/images/clipart-camera-artwork-15.png" className={classes.avatar} /></NavLink>
                                </Button>
                            </Grid>
                            <Button style={{ marginRight: "10px" }}>
                                <Typography  ><NavLink to="/quotes" style={{ color: "#ffc400", fontFamily: "cursive", fontWeight: 600, textDecoration: "none" }} fontSize="large">Quotes</NavLink></Typography>
                            </Button>
                          
                            <Button style={{ marginRight: "10px" }} >
                                <Typography  ><NavLink to="/jokes" style={{ color: "#ffc400", fontFamily: "cursive", fontWeight: 600, textDecoration: "none" }} fontSize="large">Jokes</NavLink></Typography>
                            </Button>


                        </Toolbar>
                    </Grid>
                </AppBar>
            </div>
            <div className='hero-container'>
                <img src='https://c4.wallpaperflare.com/wallpaper/497/360/961/abstract-geometry-grey-shapes-yellow-hd-wallpaper-preview.jpg' alt="background" className="img" width="100%" />
                <h2 style={{ fontFamily: "cursive" }}>" {joke} "</h2>
                <p style={{ fontFamily: "cursive" }}><span style={{color: "white"}}>Punchline </span> - {punchline}</p>
                <Button
                    onClick={ getJokes }
                    variant="contained"
                    style={{ backgroundColor: "#ffc400", fontSize: "18px", fontFamily: "cursive", marginTop: "20px", color: "black" }}
                    className="btn-mobile"
                    startIcon={<ImportExportIcon />}
                >
                   Generate Jokes
                </Button>
            </div>
    

        </>
    );
}

export default Jokes;