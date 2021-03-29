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


const quote = "An open-source platform with AI capabilities that connects warehouses, logistics companies, and small businesses to find partners and complete transactions"
const quote2 = " Dots Logistics is tailored towards supporting B2B and B2C relationships, helping improve the efficiency within the supply and logistics sector";
const quote3 = "A low-cost solution for SMEs during and post-COVID";


  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction = "row">
      <Grid item xs={4}>
      <Grid item xs={12} className={classes.style1} >  </Grid>

          <h1 style = {{textAlign : 'center',fontWeight: 'bold', color: '#2E666E'}}>More info</h1>
          <Grid item xs={12} className={classes.style1} >  </Grid>
          <Grid item xs={12} style = {{textAlign : 'left', padding: '10px'}}> 
              <ul style ={{fontSize: '20px'}}>
                <li>{quote}</li>
                <Grid item xs={12} className={classes.style1} >  </Grid>

                <li>{quote2}</li>
                <Grid item xs={12} className={classes.style1} >  </Grid>
                <li>{quote3}</li>
              </ul>
          
          </Grid>
          <Grid item xs={12} className={classes.style1} >  </Grid>
          <Grid item xs={12} className={classes.style1} > 
          <Button variant="contained" style = {{background: "#2E666E", color: 'white', fontWeight: 'bold'}}>
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