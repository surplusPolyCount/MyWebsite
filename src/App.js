//import {createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from '@mui/material/Typography';
import { palette } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//media
import rmgif from './media/raymarcher.mp4'; 
import running from './media/runninz.mp4';
import headerBackgrnd from './media/d3backrender.png';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import MonitorRoundedIcon from '@mui/icons-material/MonitorRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

//components
import NavBar from './components/NavBar'
import ArtDisplay from './components/ArtDisplay'


//GOOD EXAMPLE?
//http://www.tenghaowang.com/computergraphics

//https://coolors.co/161c1c-4c4652-798992-9fa8af-ffb26f

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
      color:'#798992'
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
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%", 
    margin: "10vh auto", 
    textAlign: "center",
  },
  headerArt:{
    minHeight: "100vh",
    margin: "0 0", 
    padding: "0 0",
  },

  headerPic:{
    width: "100vw",
    height: "90vh", 
    objectFit: "cover",
    margin: "0 0",
    padding: "0 0",
    position: "absolute",
    zIndex: '-1',
  },

  iconSoftware:{
    width: "50%", 
    filter: "invert(57%) sepia(6%) saturate(821%) hue-rotate(157deg) brightness(91%) contrast(90%)"
  },

  iconCode:{
    width: "75%", 
    transition: "filter 0.35s", 
    "&:hover":{
      filter: "invert(88%)"
    }
  },

  link:{
    color: "", 

  },


});
// color pallete: 
//https://coolors.co/161c1c-4c4652-798992-9fa8af-ffb26f
function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <NavBar/> 
      <div className={classes.headerArt} style={{marginBottom: "-5%",}}>
        <img className={classes.headerPic} src={headerBackgrnd}/>
        <Typography variant="h3">Simon<br />Rosenthal</Typography>
      </div> 

      <div className={classes.wrapper}> 
      <Typography variant="h4">About</Typography>
      <Typography variant="body1" sx={{textAlign:"left", marginLeft:'10px'}}>
      Simon Rosenthal has been studying all aspects of art and technology for the past 7 years. 
      His passion for the field has made him a solid asset for bridging the worlds of art and software engineering, 
      Simon has experience with everything ranging from 3D asset production, working in large code bases, and computer graphics.
      </Typography>
      </div>

      <div className={classes.wrapper}>
      <Grid container spacing={2.0} sx={{width:"100%", margin:"auto"}}>
        <Grid item xs={3}>
          <a style={{color: '#798992', textDecoration: 'none'}} href={''}>
          <div style={{paddingTop: '15px', width: '175px', height: '175px', borderRadius: '300px', backgroundColor: '#212a2a'}}>
            <BrushRoundedIcon sx={{fontSize: 100}}/>
            <h1 style={{position: 'relative', top: '-5vh'}}>Art</h1>
          </div>
          </a> 
        </Grid> 

        <Grid item xs={3}>
        <div style={{paddingTop: '15px', width: '175px', height: '175px', borderRadius: '300px', backgroundColor: '#212a2a'}}>
            <SportsEsportsRoundedIcon sx={{fontSize: 100}}/>
            <h1 style={{position: 'relative', top: '-5vh'}}>Games</h1>
          </div>
        </Grid> 

        <Grid item xs={3}>
        <div style={{paddingTop: '15px', width: '175px', height: '175px', borderRadius: '300px', backgroundColor: '#212a2a'}}>
            <CodeRoundedIcon sx={{fontSize: 100}}/>
            <h1 style={{position: 'relative', top: '-5vh'}}>Code</h1>
          </div>
        </Grid> 

        <Grid item xs={3}>
        <div style={{paddingTop: '15px', width: '175px', height: '175px', borderRadius: '300px', backgroundColor: '#212a2a'}}>
            <MonitorRoundedIcon sx={{fontSize: 100}}/>
            <h1 style={{position: 'relative', top: '-5vh'}}>Shaders</h1>
          </div>
        </Grid> 
      </Grid>
      </div>  

      <div className={classes.wrapper} style={{height: '80vh', width: '75vw', margin: '30vh auto'}}>
        <Typography variant="h4">Art</Typography>
        <ArtDisplay/> 
       
      </div>
   

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
      </ThemeProvider>
    </div>
    
  );
}

export default App;
