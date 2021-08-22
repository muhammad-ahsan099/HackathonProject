

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box/Box';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    
  },
}));

export default function BlogSection() {
  const classes = useStyles();

  return (
    <div className={classes.root} boxShadow={0}>
      
      <Grid container spacing={1}   boxShadow={0}>
        <Grid item xs={12} sm={6}  md={6} lg={6} boxShadow={0} style={{ marginLeft: 'auto' , marginRight: 'auto' , fontFamily: 'cursive' ,letterSpacing: 1 , paddingLeft: 20 , paddingRight: 20 , paddingTop: 100 , paddingBottom: 150 }}>
          
          <Box  boxShadow={0}   >
          <h1  style={{textAlign:"center" , fontFamily: 'monospace'}}>The best restaurants in Pakistan are closer than you think</h1>
          <p style={{textAlign:"center"}} >
          Some dyed-in-the-wool foodies never compromise. They travel miles to a restaurant renowned for biryanis (for example). And then travel some more, looking for the perfect falooda to wash it down.
          </p>
          </Box>
              
         
        </Grid> 
        
      </Grid>
    </div>
  );
}
