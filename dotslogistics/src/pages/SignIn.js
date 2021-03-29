import React, { useState } from "react";
import {
  Grid,
  Button,
  MenuItem,
  Divider,
  withStyles,
  Paper,
  TextField,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import SearchBanner from "../assets/searchBanner.jpg";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import SignInPic from "../assets/signIn.png";
import { addBusiness } from "../data/businesses.js";
import Navbar from "../components/navbar/Navbar";

const styles = () => ({
  banner: {
    height: 100,
    backgroundImage: `url(${SearchBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    padding: 50,
    opacity: 0.4,
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
  },
  inputBox: {
    width: "80%",
    textAlign: "left",
    padding: 65,
  },
  form: {
    marginTop: 10,
  },
  paper: {
    borderRadius: 20,
    padding: "40px 200px 40px 200px",
    marginTop: 60,
  },
  field: {
    margin: 10,
    backgroundColor: "rgb(209, 230, 254, 0.5)",
    borderRadius: 4,
  },
  subHeader: {
    width: "100%",
    textAlign: "left",
  },
  btnWrap: {
    textAlign: "center",
    width: "100%",
    marginBottom: 40,
  },
  colFields: {
    display: "flex",
  },
  btn: {
    borderRadius: 20,
    height: 50,
    textTransform: "none",
    fontSize: 18,
    width: "40%",
    border: "1px solid #2A8D88",
    color: "#2A8D88",
    "&:hover": {
      backgroundColor: "#2A8D88",
      color: "white",
    },
    marginLeft: 10,
  },
  btnFilled: {
    borderRadius: 20,
    height: 50,
    textTransform: "none",
    fontSize: 18,
    width: "40%",
    backgroundColor: "#2A8D88",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(42, 141, 136, 0.5)",
    },
    marginRight: 10,
  },
});

const SignIn = (props) => {
  const { classes, history } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(true);
  };

  const handleHidePassword = () => {
    if (showPassword) {
      setShowPassword(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={classes.banner}>
        <h1 style={{ height: "100%" }}>Welcome Back</h1>
      </div>
      <Grid style={{ backgroundColor: "#F0F8FF" }} container justify="center">
        <Grid item xs={5}>
          <img src={SignInPic} alt="Sign In" width="100%" height="100%" />
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper} elevation={10}>
            <h3 className={classes.subHeader}>Sign In</h3>
            <TextField
              className={classes.field}
              fullWidth
              variant="filled"
              label="Email Address"
            />
            <TextField
              className={classes.field}
              fullWidth
              variant="filled"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onMouseDown={() => {
                        handleShowPassword();
                      }}
                      onMouseUp={() => {
                        handleHidePassword();
                      }}
                      onMouseLeave={() => {
                        handleHidePassword();
                      }}
                      edge="end"
                      style={{ backgroundColor: "transparent" }}
                      disableRipple
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <Checkbox style={{ color: "#2A8D88" }} />
                <p style={{ marginTop: 15 }}>Remember Me?</p>
              </div>
              <a href="/">
                <p>Forgot Password?</p>
              </a>
            </div>
            <br />
            <div className={classes.btnWrap}>
              <Button
                className={classes.btnFilled}
                variant="contained"
                onClick={() => history.push("/dash")}
              >
                Login
              </Button>
              <Button
                className={classes.btn}
                variant="outlined"
                onClick={() => history.push("/signup")}
              >
                Sign Up
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(SignIn);
