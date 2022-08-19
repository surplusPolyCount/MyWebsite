import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ProjectItem from '../components/ProjectItem';

//media 
import Back from '../media/art/armednready.png';

const theme = createTheme({
    palette: {
      background: {
        default: "#161C1C"
      },
      primary:{
        main:"#4C4652",
      },
      secondary:{
        main:"#4C4652",
      },
    },
  
    typography:{
      fontFamily:[
        'Roboto'
      ],
      body1:{
        color:'#798992',
      },
      h3:{
        fontFamily:[
         'Quicksand'
        ], 
        color: '#9FA8AF',
        fontSize: 100, 
        textAlign: 'right',
        paddingTop: '265px',
        margin: '10px 30px 0px 30px',
      },
      h4:{
        color: '#9FA8AF',
        fontWeight: 600, 
        fontSize: 40, 
        margin: '100px 0px 45px 0px',
        lineHeight: '2rem',
      },
      h5:{
        fontWeight: 100, 
        lineHeight: '2rem',
        fontSize: 45, 
        color: '#9FA8AF',
        float: 'left',
      },
    },
  });

const styles = makeStyles({

    wrapper: {
        width: "65%", 
        margin: "10vh auto", 
        textAlign: "center",
    },

    iconCode:{
      width: "50%", 
      transition: "filter 0.35s", 
      "&:hover":{
        filter: "invert(88%)"
      }
    },
});

function Code() {
    const classes = styles();
    return (
        <div>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.wrapper}>
            <Typography variant="h4">Languages</Typography>
            <Grid container spacing={2.0} sx={{width:"100%", margin:"auto"}}>
            <Grid  item xs={2}>
                <img className={classes.iconCode} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" />
            </Grid>
            <Grid  item xs={2}>
            <img className={classes.iconCode} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" />
            </Grid>
            <Grid  item xs={2}>
            <img className={classes.iconCode} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" />
            </Grid>  
            <Grid item xs={2}>
            <img className={classes.iconCode} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" />
            </Grid> 
            
            <Grid item xs={2}>
            <img className={classes.iconCode} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />          </Grid>
            <Grid item xs={2}>
            <img className={classes.iconCode} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
            </Grid>
            <Grid item xs={2}>
            </Grid> 
            <Grid item xs={2}>
            </Grid> 
            <Grid item xs={2}>
            <img className={classes.iconCode} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
            </Grid>  
            <Grid item xs={2}>
            <img className={classes.iconCode} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-plain.svg" />
            </Grid> 
            </Grid>
        </div>  
        <div className={classes.wrapper}>
        <ProjectItem 
                ProjImg={""}
                ProjTit="Sample"
                ProjDes="hello there what is the problem with what has been going"/>
      

        <ProjectItem 
                ProjImg={""}
                ProjTit="Sample"
                ProjDes="hello there what is the problem with what has been going"/>
      

        <ProjectItem 
                ProjImg={""}
                ProjTit="Sample"
                ProjDes="hello there what is the problem with what has been going"/>
        </div>
            
        </ThemeProvider>
        </div>
    );
}
export default Code;