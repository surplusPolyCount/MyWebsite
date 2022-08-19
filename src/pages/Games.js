import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from '@mui/material/Typography';
import ProjectItem from '../components/ProjectItem';


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
  
  
  });

function Games() {
    const classes = styles();
    return (
        <div> 
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.wrapper}>
        </div>
        </ThemeProvider> 
        </div> 
    );
}

export default Games;