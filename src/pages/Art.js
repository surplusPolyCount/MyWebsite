import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from "@mui/material/styles";import CssBaseline from "@mui/material/CssBaseline";
import Typography from '@mui/material/Typography';
import ArtDisplay from '../components/ArtDisplay';

//art media
import twoD1 from '../media/art/armednready.png'; 
import twoD2 from '../media/art/demonwoman.png'; 
import twoD3 from '../media/art/gluttony.png'; 
import twoD4 from '../media/art/charConceptColor.png'; 
import twoD5 from '../media/art/swordConcept4.png'; 



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
  
    twoDpiece:{
        width: "29%", 
        float: 'left',
        textAlign: 'center',
        margin: '0.5em 0.5em 0em 0.5em',
        textAlign: 'center',
    },

    link:{
      color: "", 
  
    },
  
  
  });

function Art() {
    const classes = styles();
    return (
        <div> 
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.wrapper} style={{position:'relative', top: '-6vh', backgroundColor: 'red', height: '85vh', width: '100vw'}}>
            <ArtDisplay/> 
        </div>      

        <div className={classes.wrapper} style={{width: '80%'}}>
            <a href={twoD1}> <img className={classes.twoDpiece} src={twoD1}/> </a> 
            <img className={classes.twoDpiece} src={twoD2}/>  
            <img className={classes.twoDpiece} src={twoD3}/>  
            <img className={classes.twoDpiece} src={twoD4}/>  
            <img className={classes.twoDpiece} src={twoD5}/>  
        </div> 

        </ThemeProvider> 
        </div> 
    );
}

export default Art;