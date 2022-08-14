import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import ArtDisplayElement from './ArtDisplayElement';

//media sources
import organicSculptSample from '../media/organicSculpting.png'
import hardSurfaceModelSample from '../media/d3backrender.png'
import shaderSample from '../media/raymarcher.gif'
import animSample from '../media/animationCapture.JPG'


const styles = makeStyles({
    DisplayWrapper:{
        width: '100%',
        height: '100%',
    }, 
}); 


function ArtDisplay(){
    const classes = styles(); 

    const [displayHover, setDH] = useState(false);

    return(
        <div className={classes.DisplayWrapper} onMouseEnter={()=>setDH(!displayHover)} onMouseLeave={()=>setDH(!displayHover)}>
             <ArtDisplayElement currentState={displayHover} backgrndCol={'#212a2a'} imgSrc={organicSculptSample} title={'3D'} />  
             <ArtDisplayElement currentState={displayHover} backgrndCol={'#212a2a'} imgSrc={hardSurfaceModelSample} title={'2D'}/>            
             <ArtDisplayElement currentState={displayHover} backgrndCol={'#212a2a'} imgSrc={shaderSample} title={'Animation'}/>            
        </div>
    ); 
}

export default ArtDisplay 
