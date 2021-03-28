import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import Calendar from '../../pictures/calendar.png'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    container: {
        padding: '10px',
        borderRadius: '25px',
        backgroundColor: 'white',
        width: "300px",
        display: 'block', 
        marginLeft: 'auto', 
        marginRight: 'auto'
        
    }


  }));
  
  export default function Dropdown() {
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
      <div>
        <Grid container>
            
            <div className = {classes.container} style = {{display: 'flex', alignItems : 'center'}} >

                <Grid item xs = {2} style = {{}}>
                <img src={Calendar} alt="calendar" style= {{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40px'}}/>
                </Grid>
                <Grid item xs = {4} style = {{}}>
                    <h6>Mar 03 - Mar 12</h6>
                </Grid>
                <Grid item xs = {6} style = {{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40%'}}>
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
      </div>
    );
  }
  