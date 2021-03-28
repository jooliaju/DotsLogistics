import React from "react";
import './Footer.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Footer = () => (
  <div className="footer">

    <Grid container spacing={3}>
        <Grid item xs={12} style = {{height: '50px'}}></Grid>
        <Grid item xs={12} style = {{height: '50px'}}><h2 style= {{color:  'white', textAlign: 'center' }}>Bringing Businesses Together</h2></Grid>
        <Grid item xs={12} style = {{height: '50px'}}></Grid>
    
        
      </Grid>

  </div>
);

export default Footer;