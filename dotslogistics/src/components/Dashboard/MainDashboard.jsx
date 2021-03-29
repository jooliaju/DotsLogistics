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
import CustomerUpdate from '../../pictures/CustomerUpdate.png';
import Checkbox from '@material-ui/core/Checkbox';
import Revenue from '../../pictures/RevenueGrowth.png';
import TopLocations from '../../pictures/TopLocations.png';



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


    const [checked, setChecked] = React.useState(true);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
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
            <Grid item xs = {1}></Grid>

           <Grid item xs = {4}>


            <div className={classes.container1}>

                <Grid container>

                    <Grid item xs = {6} style = {{textAlign: 'left'}}>
                        Assets on Account
                    </Grid>
                    <Grid item xs = {6} style = {{}}>
                    <FormControl className={classes.formControl}>
                                            <NativeSelect
                                                 value={state.time}
                                                 onChange={handleChange}
                                                 name="time"
                                                 className={classes.selectEmpty}
                                                 inputProps={{ 'aria-label': 'time' }}>
                                                 <option value="">Last Week</option>
                                                 <option value={10}>1 Month</option>
                                                 <option value={20}>3 Months</option>
                                                 <option value={30}>6 Months</option>
                                             </NativeSelect>
                                         <FormHelperText>Select time frame</FormHelperText>
                                     </FormControl>
                    </Grid>

                    <Grid item xs = {12} style = {{height: "20px"}}>
                       
                    </Grid>

                        <div style = {{display: 'flex'}}>
                            <Grid item xs = {3} style = {{paddingLeft: '30px'}}>
                                <div style = {{backgroundColor : "#E2ECFF", width: '40px', height: "40px", borderRadius: "10px", }}></div>
                            </Grid>
                            <Grid item xs = {1} style = {{}}>
                            </Grid>

                            <Grid item xs = {7} style = {{}}>
                                <div style = {{textAlign: 'left', paddingLeft: '30px', width: '100px'}}>
                                    <h4>Truck 1</h4>
                                    <h6>1.2k New Products</h6>
                                </div>
                            </Grid>

                            <Grid item xs = {2} style = {{textAlign: "left"}}>
                                <span style = {{paddingLeft: '125px'}}>
                                    11.6k
                                </span>
                            </Grid>

                        </div>

                        <Grid item xs = {12} style = {{height: "20px"}}>
                       
                       </Grid>
   
                           <div style = {{display: 'flex'}}>
                               <Grid item xs = {3} style = {{paddingLeft: '30px'}}>
                                   <div style = {{backgroundColor : "#CCF5F8", width: '40px', height: "40px", borderRadius: "10px", }}></div>
                               </Grid>
                               <Grid item xs = {1} style = {{}}>
                               </Grid>
   
                               <Grid item xs = {7} style = {{}}>
                                   <div style = {{textAlign: 'left', paddingLeft: '30px', width: '100px'}}>
                                       <h4>Truck 2</h4>
                                       <h6>33.6k New Sales</h6>
                                   </div>
                               </Grid>
   
                               <Grid item xs = {2} style = {{textAlign: "left"}}>
                                   <span style = {{paddingLeft: '125px'}}>
                                       26M
                                   </span>
                               </Grid>
   
                           </div>

                           <Grid item xs = {12} style = {{height: "20px"}}>
                       
                       </Grid>
   
                           <div style = {{display: 'flex'}}>
                               <Grid item xs = {3} style = {{paddingLeft: '30px'}}>
                                   <div style = {{backgroundColor : "#FCDEDE", width: '40px', height: "40px", borderRadius: "10px", }}></div>
                               </Grid>
                               <Grid item xs = {1} style = {{}}>
                               </Grid>
   
                               <Grid item xs = {7} style = {{}}>
                                   <div style = {{textAlign: 'left', paddingLeft: '30px', width: '100px'}}>
                                       <h4>Truck 3</h4>
                                       <h6>43.6k New Revenue</h6>
                                   </div>
                               </Grid>
   
                               <Grid item xs = {2} style = {{textAlign: "left"}}>
                                   <span style = {{paddingLeft: '125px'}}>
                                       15.5M
                                   </span>
                               </Grid>
   
                           </div>


                           <Grid item xs = {12} style = {{height: "20px"}}>
                       
                       </Grid>
   
                          
                </Grid>

                
            
            
            </div>
                
           </Grid>

            
           <Grid item xs={7}>
                 <img src={CustomerUpdate}  className={classes.container1} style= {{ width: '90%'}}/>
            </Grid>



            <Grid item xs={5}>
                    <div className={classes.container1}>
                        <Grid container>
                            <Grid item xs = {12} style = {{height: '30px'}}>
                            </Grid>
                            <Grid item xs = {12} style = {{textAlign : 'left'}}>
                                <span style = {{fontSize : '30px'}}>Tasks to be Completed</span>
                            </Grid>

                            <Grid item xs = {12} style = {{height: '30px'}}>
                            </Grid>

                            <Grid item xs = {6} style = {{textAlign : 'left', paddingLeft: '28px'}}>
                                <h4>Send three proposals</h4>
                                <h6>Description</h6>
                            </Grid>


                            <Grid item xs = {6} style = {{textAlign : 'right', paddingRight: '50px'}}>
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleCheck}
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                            </Grid>

                            <Grid item xs = {12} style = {{height: '30px'}}>
                            </Grid>

                            <Grid item xs = {6} style = {{textAlign : 'left', paddingLeft: '28px'}}>
                                <h4>Review customer needs</h4>
                                <h6>Description</h6>
                            </Grid>


                            <Grid item xs = {6} style = {{textAlign : 'right', paddingRight: '50px'}}>
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleCheck}
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                            </Grid>

                            <Grid item xs = {12} style = {{height: '30px'}}>
                            </Grid>

                            <Grid item xs = {6} style = {{textAlign : 'left', paddingLeft: '28px'}}>
                                <h4>Review and sign two new contracts</h4>
                                <h6>Description</h6>
                            </Grid>


                            <Grid item xs = {6} style = {{textAlign : 'right', paddingRight: '50px'}}>
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleCheck}
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                            </Grid>

                            <Grid item xs = {12} style = {{height: '30px'}}>
                            </Grid>



                        </Grid>

                    </div>
            </Grid>
            <Grid item xs={7}>
                 <img src={Revenue}  className={classes.container1} style= {{ width: '90%'}}/>
            </Grid>

            <Grid item xs={3}>
            <img src={TopLocations}  className={classes.container1} style= {{ width: '100%'}}/>
            </Grid>
        </Grid>
        
      </div>
    );
  }
  
