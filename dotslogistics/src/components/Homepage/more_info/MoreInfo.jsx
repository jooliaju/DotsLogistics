import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Collab from'../../../pictures/collaboration.jpg';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  style1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    
  },

  style2: {
      backgroundSize: 'contain',
      maxWidth: '100%',
      float: 'right'
      
      
      
  }

}));

export default function MoreInfo() {


const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi. Pretium aenean pharetra magna ac placerat vestibulum lectus. Aliquam ut porttitor leo a diam sollicitudin tempor id. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Orci eu lobortis elementum nibh tellus molestie. Turpis egestas sed tempus urna. Adipiscing at in tellus integer. Habitasse platea dictumst quisque sagittis. In hac habitasse platea dictumst quisque. Rutrum quisque non tellus orci ac auctor augue. Amet luctus venenatis lectus magna fringilla. Interdum posuere lorem ipsum dolor. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Ultricies tristique nulla aliquet enim tortor. Viverra aliquet eget sit amet tellus. Nisi porta lorem mollis aliquam ut. "
     


  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction = "row">
      <Grid item xs={4}>
      <Grid item xs={12} className={classes.style1} >  </Grid>

          <h1 style = {{textAlign : 'center', fontWeight: 'bold', color: 'blue'}}>more info</h1>
          <Grid item xs={12} className={classes.style1} >  </Grid>
          <Grid item xs={12} style = {{textAlign : 'left', padding: '50px'}}> {dummyText}</Grid>
          <Grid item xs={12} className={classes.style1} >  </Grid>
          <Grid item xs={12} className={classes.style1} > 
          <Button variant="contained" color="primary">
                Read More
            </Button>
           </Grid>
          
        </Grid>


        <Grid item xs={8}>
        <img src={Collab} className={classes.style2} alt="collab"/>
        </Grid>

        
        
        
      </Grid>
    </div>
  );
}