import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';

//media 
import projAlt from '../media/projectAlt.png';

const styles = makeStyles({
      ProjectItem:{
        width: '100%',
        backgroundColor: '',
        height: '350px',
        margin: '12.5% 0'
      },

      ProjectMedia:{
        float: 'left',
        width: '30%',
        height: '340px',
        backgroundColor: '',
        margin: '0 2.5%',
      },

      ProjectImage:{
        borderRadius: '50%',
        height: '300px',
      },

      ProjectText:{
        float: 'left',
        textAlign: 'left',
        width: '60%',
        backgroundColor: '',
        margin: '0 2.5%',
      },
});


function ProjectItem(parts) {
    const classes = styles();
    return (
        <div className={classes.ProjectItem}>
                <div className={classes.ProjectMedia}> 
                    <img className={classes.ProjectImage} src={parts.ProjImg==""?projAlt:parts.ProjImg} />
                </div> 
                <div className={classes.ProjectText}>
                    < Typography variant="h5" styles={{ color: '#FFFFFF',}}>
                        {parts.ProjTit}
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant="body1">
                        {parts.ProjDes}
                    </Typography> 
                </div>
        </div>
    );
}
//PYTHON PROJECT 
//https://github.com/simonrosenthal/422_project_1
export default ProjectItem;