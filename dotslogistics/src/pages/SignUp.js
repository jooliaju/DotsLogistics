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
import SignUpPic from "../assets/signUp.png";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
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
    padding: "40px 80px 40px 80px",
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
  },
  colFields: {
    display: "flex",
  },
  btn: {
    borderRadius: 20,
    height: 50,
    textTransform: "none",
    fontSize: 18,
    width: "20%",
    border: "1px solid #2A8D88",
    color: "#2A8D88",
    "&:hover": {
      backgroundColor: "#2A8D88",
      color: "white",
    },
  },
});

const SignUp = (props) => {
  const { classes, history } = props;
  const [businessName, setBusinessName] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);

  const handleBusNameChange = (e) => {
    setBusinessName(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = () => {
    addBusiness(businessName, desc, city, price);
    history.push("/dash");
  };

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
        <h1 style={{ height: "100%" }}>Sign Up</h1>
      </div>
      <Grid style={{ backgroundColor: "#F0F8FF" }} container justify="center">
        <Grid item xs={5}>
          <img src={SignUpPic} alt="Sign Up" width="100%" height="100%" />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={10}>
            <h3 className={classes.subHeader}>Business Details</h3>
            <TextField
              className={classes.field}
              fullWidth
              variant="filled"
              label="Business Name"
              onChange={handleBusNameChange}
            />
            <p style={{ width: "100%", marginBottom: -5, marginLeft: 10 }}>
              <strong>About Your Business</strong>
            </p>
            <TextField
              className={classes.field}
              multiline
              rows={3}
              fullWidth
              variant="filled"
              placeholder="Provide a brief overview of your business..."
              onChange={handleDescChange}
            />
            <div className={classes.colFields}>
              <div style={{ width: "50%", marginRight: 20, marginTop: 32 }}>
                <TextField
                  className={classes.field}
                  variant="filled"
                  fullWidth
                  label="Availability (Working Hours)"
                />
              </div>
              <div>
                <p style={{ width: "100%", marginBottom: -5, marginLeft: 10 }}>
                  <strong>Business Address</strong>
                </p>
                <TextField
                  className={classes.field}
                  style={{ width: "40%" }}
                  variant="filled"
                  label="City/Town"
                  onChange={handleCityChange}
                />
                <TextField
                  className={classes.field}
                  style={{ width: "40%" }}
                  variant="filled"
                  label="Address"
                />
              </div>
            </div>
            <div className={classes.colFields}>
              <div style={{ width: "45%", marginRight: 20 }}>
                <p style={{ width: "100%", marginBottom: -5, marginLeft: 10 }}>
                  <strong>Business Contact Details</strong>
                </p>
                <TextField
                  className={classes.field}
                  variant="filled"
                  fullWidth
                  label="Email Address"
                />
              </div>
              <div style={{ width: "45%", marginTop: 32 }}>
                <TextField
                  className={classes.field}
                  variant="filled"
                  fullWidth
                  label="Phone Number"
                />
              </div>
            </div>
            <TextField
              className={classes.field}
              style={{ width: "45%" }}
              variant="filled"
              label="Business Partner or Shipper"
              select
            >
              <MenuItem>Business Partner</MenuItem>
              <MenuItem>Shipper</MenuItem>
            </TextField>
            <TextField
              className={classes.field}
              style={{ width: "45%" }}
              variant="filled"
              label="Industry"
            />
            <TextField
              className={classes.field}
              style={{ width: "45%" }}
              variant="filled"
              label="Starting Price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              onChange={handlePriceChange}
            />
            <Divider />
            <h3 className={classes.subHeader}>Contact Details</h3>
            <TextField
              className={classes.field}
              fullWidth
              variant="filled"
              label="Full Name"
            />
            <TextField
              className={classes.field}
              fullWidth
              variant="filled"
              label="Email Address"
            />
            <TextField
              className={classes.field}
              style={{ width: "45%" }}
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
            <TextField
              className={classes.field}
              style={{ width: "45%" }}
              variant="filled"
              label="Confirm Password"
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
            <div style={{ display: "flex" }}>
              <Checkbox style={{ color: "#2A8D88" }} />
              <p style={{ marginTop: 15 }}>
                I accept DotsLogistics Terms of Use & Privacy Policy
              </p>
            </div>
            <br />
            <div className={classes.btnWrap}>
              <Button
                className={classes.btn}
                variant="outlined"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(SignUp);
