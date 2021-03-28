import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Seventy from '../../pictures/70.png';
import Ten from '../../pictures/10.png';
import Hundred from '../../pictures/100.png';
import OrderSummary from '../../pictures/OrderSummary.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },

      formControl: {
        minWidth: 120,
      },
    container1: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "white",
        height: '500px',
        margin: '30px',
        borderRadius: '30px',
        boxShadow: "5px 5px 5px"


        
      },

      container2: {
    
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "white",
        height: '200px',
        margin: '50px',
        width: '500px',
        borderRadius: '30px',
        boxShadow: "5px 5px 5px"
      },




  }));
  
  export default function MainDashboard() {
    const classes = useStyles();

    const [state, setState] = React.useState({
      time: '',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };

  
    return (
      <div className = {classes.root}>
          <Grid container spacing={3}>


            <Grid  container xs={3.5} className={classes.container2}>
                <Grid item xs={6} style = {{textAlign : "left", }}>
                    
                        <h2 >Goods in Transit</h2>
                         <h4> 240 of total 500 </h4>
                  
                    
                </Grid>
                <Grid item xs={6}>
                    <img src={Seventy}  style= {{ marginLeft: 'auto', marginRight: 'auto', width: '170px'}}/>
                </Grid>
            </Grid>



            <Grid  container xs={3.5} className={classes.container2}>
                <Grid item xs={6} style = {{textAlign : "left", }}>
                    
                        <h2 >Volume of</h2>
                         <h4> in 000s</h4>
                    
                </Grid>
                <Grid item xs={6}>
                    <img src={Ten}  style= {{ marginLeft: 'auto', marginRight: 'auto', width: '170px'}}/>
                </Grid>
            </Grid>

            <Grid  container xs={3.5} className={classes.container2}>
                <Grid item xs={6} style = {{textAlign : "left", }}>
                    
                        <h2 >Contracts Signed</h2>
                         <h4> 150 of total 326 </h4>
                  
                    
                </Grid>
                <Grid item xs={6}>
                    <img src={Hundred}  style= {{ marginLeft: 'auto', marginRight: 'auto', width: '170px'}}/>
                </Grid>
            </Grid>
            
              
            <Grid item xs={7}>
                 <img src={OrderSummary}  className={classes.container1} style= {{ width: '100%'}}/>
            </Grid>

           <Grid item xs = {4}>
                <Grid  container  className={classes.container1} >

                    <div style ={{display: "flex"}}>
                                <Grid item xs={6} style = {{textAlign : "left", paddingLeft: '30px'}}>
                                        
                                        <span style = {{fontWeight: 'bold'}} >Assets on Account</span >            
                                    
                                </Grid>
                                <Grid item xs={6} style ={{backgroundColor: 'red'}}>
                                    
                                </Grid>
                                <Grid item xs={6} style ={{backgroundColor: 'red'}}>
                                    <FormControl className={classes.formControl}>
                                            <NativeSelect
                                                value={state.time}
                                                onChange={handleChange}
                                                name="time"
                                                className={classes.selectEmpty}
                                                inputProps={{ 'aria-label': 'time' }}
                                            >
                                                <option value="">Last Week</option>
                                                <option value={10}>1 Month</option>
                                                <option value={20}>3 Months</option>
                                                <option value={30}>6 Months</option>
                                            </NativeSelect>
                                        <FormHelperText>Select time frame</FormHelperText>
                                    </FormControl>

                                </Grid>

                    </div>
                        
                    </Grid>
           </Grid>

            
            <Grid item xs={7}>
            <div className={classes.container1}>xs=12</div>
            </Grid>
            <Grid item xs={5}>
            <div className={classes.container1}>xs=6</div>
            </Grid>
            <Grid item xs={7}>
            <div className={classes.container1}>xs=12</div>
            </Grid>
            <Grid item xs={5}>
            <div className={classes.container1}>xs=6</div>
            </Grid>
        </Grid>
        
      </div>
    );
  }
  