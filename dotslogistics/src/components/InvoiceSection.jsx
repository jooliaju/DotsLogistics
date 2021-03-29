import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import invoice from '../pictures/invoice.png';

export default function InvoiceSection() {
    return (
        <div>
            <Grid container>
                <Grid item xs ={3}>

                </Grid>
                <Grid item xs ={6} style = {{height:'100px'}}>
                    <img src ={invoice} style = {{objectFit: 'contain', height: '500px'}}></img>
                </Grid>
                <Grid item xs ={3}>
                    
                </Grid>
            </Grid>
            
        </div>
    )
}
