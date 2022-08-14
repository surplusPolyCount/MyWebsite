import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@mui/material/Box';


const styles = makeStyles({     
    ArtBox:{
        height: '100%',
        float: 'left', 
        margin: 'auto', 
        width: '33%',
    },
    ArtBoxHover:{
        height: '100%',
        float: 'left', 
        margin: 'auto', 
        width: '70%'
    },
    ArtBoxNoHover:{
        height: '100%',
        float: 'left', 
        margin: 'auto', 
        width: '15%'
    }
}); 

function checker(theState, elementState, classes){
    if(theState){
        if(elementState){
            return classes.ArtBoxHover; 
        }
        else{
            return classes.ArtBoxNoHover; 
        }
    }else{
        return classes.ArtBox; 
    }
}


function ArtDisplayElement(props){
    const classes = styles(); 

    const [displayElementHover, setDEH] = useState(false);


    return(
        <Box 
             onMouseEnter={()=>setDEH(!displayElementHover)}
             onMouseLeave={()=>setDEH(!displayElementHover)}
             className={checker(props.currentState, displayElementHover, classes)}  
             sx={{backgroundColor: props.backgrndCol }}>
             <div style={{width: '100%', height: '100%'}}>
                    <img style={{ objectFit: 'cover', width: '100%', height:'95%'}} src={props.imgSrc}/>
                    <h1 style={{position: 'relative', top:'-5vh'}}>{props.title}</h1> 
            </div> 
        </Box>         
    );
}

export default ArtDisplayElement;