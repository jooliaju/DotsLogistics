import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import avatar from '../../pictures/avatars/avataaars.png';
import avatar2 from '../../pictures/avatars/avataaars-2.png';
import avatar3 from '../../pictures/avatars/avataaars-3.png';
import avatar4 from '../../pictures/avatars/avataaars-4.png';
import avatar5 from '../../pictures/avatars/avataaars-5.png';
import avatar6 from '../../pictures/avatars/avataaars-6.png';
import avatar7 from '../../pictures/avatars/avataaars-7.png';
import avatar8 from '../../pictures/avatars/avataaars-8.png';
import avatar9 from '../../pictures/avatars/avataaars-9.png';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      background: 'white',
      height: '120px',
      borderRadius: '20px'
    },

    avatar: {
        maxWidth:'100%',
        maxHeight:'100%',
        objectFit: 'contain'
    }
  }));

export default function CustomerCard() {
    const classes = useStyles();

    return (
        <div>
           <Grid container spacing = {5} style = {{padding: '15px'}}>
               <Grid item xs = {4} >
                    <div className={classes.paper} style ={{background: 'white'}}>
                        <Grid container spacing = {1}>
                            <Grid item xs = {3}>
                             
                                    <img src = {avatar} className= {classes.avatar} style = {{objectFit: 'contain', height: '55px'}} /> 
                            </Grid>
                            <Grid item xs = {5}>
                                <div style ={{display: 'flex'}}>
                                    <h3 style= {{textAlign: 'left'}}>Shania</h3>
                                    <h4 style= {{textAlign: 'left', marginLeft: '10px', color: 'gray'}}> Dataraction</h4>
                                </div>
                              
                            </Grid>
                            <Grid item xs = {4}>
                                <div style = {{height: '20px', display: 'flex',justifyContent: 'flex-end'}}>
                                        <i class="fas fa-pen" style ={{marginRight: '10px'}}></i>
                                        <i class="fas fa-times"></i>

                                </div>
                            </Grid>
                            <Grid item xs = {12}>
                                <div className={classes.paper}style = {{height: '10px', display: 'grid',justifyContent: 'center', gridAutoFlow: 'column', gridColumnGap: '30px'}}>

                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="far fa-envelope"></i>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
               </Grid>

               <Grid item xs = {4} >
                    <div className={classes.paper} style ={{background: 'white'}}>
                        <Grid container spacing = {1}>
                            <Grid item xs = {3}>
                             
                                    <img src = {avatar2} className= {classes.avatar} style = {{objectFit: 'contain', height: '55px'}} /> 
                            </Grid>
                            <Grid item xs = {5}>
                                <div style ={{display: 'flex'}}>
                                    <h3 style= {{textAlign: 'left'}}>Randy</h3>
                                    <h4 style= {{textAlign: 'left', marginLeft: '10px', color: 'gray'}}> DotsLive</h4>
                                </div>
                              
                            </Grid>
                            <Grid item xs = {4}>
                                <div style = {{height: '20px', display: 'flex',justifyContent: 'flex-end'}}>
                                        <i class="fas fa-pen" style ={{marginRight: '10px'}}></i>
                                        <i class="fas fa-times"></i>

                                </div>
                            </Grid>
                            <Grid item xs = {12}>
                                <div className={classes.paper}style = {{height: '10px', display: 'grid',justifyContent: 'center', gridAutoFlow: 'column', gridColumnGap: '30px'}}>

                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="far fa-envelope"></i>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
               </Grid>

               <Grid item xs = {4} >
                    <div className={classes.paper} style ={{background: 'white'}}>
                        <Grid container spacing = {1}>
                            <Grid item xs = {3}>
                             
                                    <img src = {avatar3} className= {classes.avatar} style = {{objectFit: 'contain', height: '55px'}} /> 
                            </Grid>
                            <Grid item xs = {5}>
                                <div style ={{display: 'flex'}}>
                                    <h3 style= {{textAlign: 'left'}}>George</h3>
                                    <h4 style= {{textAlign: 'left', marginLeft: '10px', color: 'gray'}}>KPMG</h4>
                                </div>
                              
                            </Grid>
                            <Grid item xs = {4}>
                                <div style = {{height: '20px', display: 'flex',justifyContent: 'flex-end'}}>
                                        <i class="fas fa-pen" style ={{marginRight: '10px'}}></i>
                                        <i class="fas fa-times"></i>

                                </div>
                            </Grid>
                            <Grid item xs = {12}>
                                <div className={classes.paper}style = {{height: '10px', display: 'grid',justifyContent: 'center', gridAutoFlow: 'column', gridColumnGap: '30px'}}>

                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="far fa-envelope"></i>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
               </Grid>

               <Grid item xs = {4} >
                    <div className={classes.paper} style ={{background: 'white'}}>
                        <Grid container spacing = {1}>
                            <Grid item xs = {3}>
                             
                                    <img src = {avatar4} className= {classes.avatar} style = {{objectFit: 'contain', height: '55px'}} /> 
                            </Grid>
                            <Grid item xs = {5}>
                                <div style ={{display: 'flex'}}>
                                    <h3 style= {{textAlign: 'left'}}>Billy</h3>
                                    <h4 style= {{textAlign: 'left', marginLeft: '10px', color: 'gray'}}>Supplies R Us</h4>
                                </div>
                              
                            </Grid>
                            <Grid item xs = {4}>
                                <div style = {{height: '20px', display: 'flex',justifyContent: 'flex-end'}}>
                                        <i class="fas fa-pen" style ={{marginRight: '10px'}}></i>
                                        <i class="fas fa-times"></i>

                                </div>
                            </Grid>
                            <Grid item xs = {12}>
                                <div className={classes.paper}style = {{height: '10px', display: 'grid',justifyContent: 'center', gridAutoFlow: 'column', gridColumnGap: '30px'}}>

                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="far fa-envelope"></i>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
               </Grid>

               <Grid item xs = {4} >
                    <div className={classes.paper} style ={{background: 'white'}}>
                        <Grid container spacing = {1}>
                            <Grid item xs = {3}>
                             
                                    <img src = {avatar5} className= {classes.avatar} style = {{objectFit: 'contain', height: '55px'}} /> 
                            </Grid>
                            <Grid item xs = {5}>
                                <div style ={{display: 'flex'}}>
                                    <h3 style= {{textAlign: 'left'}}>Zhiwei</h3>
                                    <h4 style= {{textAlign: 'left', marginLeft: '10px', color: 'gray'}}>Entripy</h4>
                                </div>
                              
                            </Grid>
                            <Grid item xs = {4}>
                                <div style = {{height: '20px', display: 'flex',justifyContent: 'flex-end'}}>
                                        <i class="fas fa-pen" style ={{marginRight: '10px'}}></i>
                                        <i class="fas fa-times"></i>

                                </div>
                            </Grid>
                            <Grid item xs = {12}>
                                <div className={classes.paper}style = {{height: '10px', display: 'grid',justifyContent: 'center', gridAutoFlow: 'column', gridColumnGap: '30px'}}>

                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="far fa-envelope"></i>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
               </Grid>
               <Grid item xs = {4} >
                    <div className={classes.paper} style ={{background: 'white'}}>
                        <Grid container spacing = {1}>
                            <Grid item xs = {3}>
                             
                                    <img src = {avatar6} className= {classes.avatar} style = {{objectFit: 'contain', height: '55px'}} /> 
                            </Grid>
                            <Grid item xs = {5}>
                                <div style ={{display: 'flex'}}>
                                    <h3 style= {{textAlign: 'left'}}>Anferny</h3>
                                    <h4 style= {{textAlign: 'left', marginLeft: '10px', color: 'gray'}}>The Market</h4>
                                </div>
                              
                            </Grid>
                            <Grid item xs = {4}>
                                <div style = {{height: '20px', display: 'flex',justifyContent: 'flex-end'}}>
                                        <i class="fas fa-pen" style ={{marginRight: '10px'}}></i>
                                        <i class="fas fa-times"></i>

                                </div>
                            </Grid>
                            <Grid item xs = {12}>
                                <div className={classes.paper}style = {{height: '10px', display: 'grid',justifyContent: 'center', gridAutoFlow: 'column', gridColumnGap: '30px'}}>

                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="far fa-envelope"></i>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
               </Grid>
               <Grid item xs = {4} >
                    <div className={classes.paper} style ={{background: 'white'}}>
                        <Grid container spacing = {1}>
                            <Grid item xs = {3}>
                             
                                    <img src = {avatar7} className= {classes.avatar} style = {{objectFit: 'contain', height: '55px'}} /> 
                            </Grid>
                            <Grid item xs = {5}>
                                <div style ={{display: 'flex'}}>
                                    <h3 style= {{textAlign: 'left'}}>Betul</h3>
                                    <h4 style= {{textAlign: 'left', marginLeft: '10px', color: 'gray'}}>Princess Metal</h4>
                                </div>
                              
                            </Grid>
                            <Grid item xs = {4}>
                                <div style = {{height: '20px', display: 'flex',justifyContent: 'flex-end'}}>
                                        <i class="fas fa-pen" style ={{marginRight: '10px'}}></i>
                                        <i class="fas fa-times"></i>

                                </div>
                            </Grid>
                            <Grid item xs = {12}>
                                <div className={classes.paper}style = {{height: '10px', display: 'grid',justifyContent: 'center', gridAutoFlow: 'column', gridColumnGap: '30px'}}>

                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="far fa-envelope"></i>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
               </Grid>

               <Grid item xs = {4} >
                    <div className={classes.paper} style ={{background: 'white'}}>
                        <Grid container spacing = {1}>
                            <Grid item xs = {3}>
                             
                                    <img src = {avatar8} className= {classes.avatar} style = {{objectFit: 'contain', height: '55px'}} /> 
                            </Grid>
                            <Grid item xs = {5}>
                                <div style ={{display: 'flex'}}>
                                    <h3 style= {{textAlign: 'left'}}>Mike</h3>
                                    <h4 style= {{textAlign: 'left', marginLeft: '10px', color: 'gray'}}>AMD</h4>
                                </div>
                              
                            </Grid>
                            <Grid item xs = {4}>
                                <div style = {{height: '20px', display: 'flex',justifyContent: 'flex-end'}}>
                                        <i class="fas fa-pen" style ={{marginRight: '10px'}}></i>
                                        <i class="fas fa-times"></i>

                                </div>
                            </Grid>
                            <Grid item xs = {12}>
                                <div className={classes.paper}style = {{height: '10px', display: 'grid',justifyContent: 'center', gridAutoFlow: 'column', gridColumnGap: '30px'}}>

                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="far fa-envelope"></i>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
               </Grid>
               <Grid item xs = {4} >
                    <div className={classes.paper} style ={{background: 'white'}}>
                        <Grid container spacing = {1}>
                            <Grid item xs = {3}>
                             
                                    <img src = {avatar9} className= {classes.avatar} style = {{objectFit: 'contain', height: '55px'}} /> 
                            </Grid>
                            <Grid item xs = {5}>
                                <div style ={{display: 'flex'}}>
                                    <h3 style= {{textAlign: 'left'}}>Joe</h3>
                                    <h4 style= {{textAlign: 'left', marginLeft: '10px', color: 'gray'}}>Stickers4You</h4>
                                </div>
                              
                            </Grid>
                            <Grid item xs = {4}>
                                <div style = {{height: '20px', display: 'flex',justifyContent: 'flex-end'}}>
                                        <i class="fas fa-pen" style ={{marginRight: '10px'}}></i>
                                        <i class="fas fa-times"></i>

                                </div>
                            </Grid>
                            <Grid item xs = {12}>
                                <div className={classes.paper}style = {{height: '10px', display: 'grid',justifyContent: 'center', gridAutoFlow: 'column', gridColumnGap: '30px'}}>

                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="far fa-envelope"></i>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
               </Grid>

               
               
            
            </Grid> 

            
            
            
        </div>
    )
}
