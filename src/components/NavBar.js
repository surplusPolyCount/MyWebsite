import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const styles = makeStyles({
    navWrap:{
        marginTop: "20px",
        width: "100%",
    },
    webReferences:{
        float: "left", 
        margin: "0px 10px",
      },

      iconAnchor:{
        width: "35px", 
        filter: "invert(73%) sepia(9%) saturate(256%) hue-rotate(164deg) brightness(89%) contrast(93%)",
        transition: "filter 0.35s", 
        "&:hover":{
          filter: "invert(88%) sepia(11%) saturate(3169%) hue-rotate(316deg) brightness(102%) contrast(103%)"
        }
      },
});

function NavBar(){
    const classes = styles();
    return(
    <div className={classes.navWrap} style={{height: "35px"}}> 
        <a className={classes.webReferences} href="https://gitlab.kitware.com/surplusPolyCount" >
        <svg className={classes.iconAnchor} viewBox="0 0 128 128">
          <path fill="#000000" d="M126.615 72.31l-7.034-21.646-13.94-42.902c-.54-1.662-2.44-2.07-3.654-1.23-.4.276-.724.853-.902 1.398L87.144 51H40.856L31.62 22.41 26.917 7.847a2.748 2.748 0 00-.372-.767c-.078-.104-.18-.194-.27-.28-.937-.89-2.465-.876-3.36.072a2.336 2.336 0 00-.556.894l-13.94 42.9-2.946 9.068L1.385 72.31a4.78 4.78 0 00.85 4.496c.26.317.55.613.89.86L64 121.895l60.874-44.227a4.785 4.785 0 001.74-5.357zm-7.034-21.647z"></path>
        </svg> 
        </a>
        <a className={classes.webReferences} href="https://github.com/surplusPolyCount" >
          <img className={classes.iconAnchor} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </a>

        <a className={classes.webReferences} href="https://www.linkedin.com/in/simon-rosenthal-6813961b0/" >
          <img className={classes.iconAnchor} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
        </a>

        <a className={classes.webReferences} href="https://www.artstation.com/simon1269">
        <svg className={classes.iconAnchor} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
          <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"/>
        </svg>
        </a>

        <MenuRoundedIcon className={classes.iconAnchor} sx={{float: 'right', fontSize: 50, marginRight: 5}}/>
    </div> 
    );
}
export default NavBar