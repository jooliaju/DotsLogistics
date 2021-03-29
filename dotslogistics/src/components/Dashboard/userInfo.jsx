import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';
import Drone from '../../pictures/drone.png';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor : '#D0E7FF',
      borderRadius: '30px',
      margin: '30px'

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
        color: theme.palette.text.secondary,
      height: '300px'
    },
  }));
  
  export default function UserInfo() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container >
          <div style = {{display: 'flex', alignItems: 'center'}}>
          <Grid item xs={6}>
            <h1 style = {{textAlign: 'left', padding: '10px'}}>Welcome to your Dashboard</h1>
            <div style = {{display: 'flex', alignItems : 'center', paddingBottom : "50px"}}>
             <img src={Drone} style ={{width : 200, paddingLeft: '50px', paddingTop: '20px'}}/>
                <div style = {{paddingLeft: "30px"}}>
                <h1>Canada Drone Company </h1>
                <h3>Check below for analytics</h3>
                </div>
             
            </div>
            
          </Grid>
          <Grid item xs={6} >

            <Card style ={{backgroundColor: "white", height : '150px'}}>
                <CardContent>
                    <Grid container>
                        <Grid item xs = {12} style = {{textAlign : 'left'}}>
                            Requests for Proposals
                        </Grid>

                    

                        <Grid item xs = {3} style = {{textAlign : 'center'}}>
                            <paper className = {classes.paper}>
                                <h2 style = {{fontWeight : 'bold'}}> 22 </h2>
                                <p>Recommmended</p>
                            </paper>
                        </Grid>
                        <Grid item xs = {3} style = {{textAlign : 'center'}}>
                        <paper className = {classes.paper}>
                                <h2 style = {{fontWeight : 'bold'}}> 22 </h2>
                                <p>Proposals Sent</p>
                            </paper>
                        </Grid>
                        <Grid item xs = {3} style = {{textAlign : 'center'}}>
                            <paper className = {classes.paper}>
                                <h2 style = {{fontWeight : 'bold'}}> 22 </h2>
                                <p>Proposals Accepted</p>
                            </paper>
                        </Grid>
                        <Grid item xs = {3} style = {{textAlign : 'center'}}>
                            <paper className = {classes.paper}>
                                <h2 style = {{fontWeight : 'bold'}}> 22 </h2>
                                
                                <p>Proposals In Progress</p>
                            </paper>
                        </Grid>

                    </Grid>

                </CardContent>

            </Card>
          </Grid>

          </div>
          
        </Grid>
      </div>
    );
  }
  