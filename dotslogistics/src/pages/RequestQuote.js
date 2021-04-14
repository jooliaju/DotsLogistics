import React, { useState } from "react";
import {
  Grid,
  Container,
  Button,
  MenuItem,
  withStyles,
  Paper,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Snackbar,
} from "@material-ui/core";
import SearchBanner from "../assets/searchBanner.jpg";
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
  title: {
    height: 100,
    padding: 15,
    textAlign: "center",
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
    backgroundColor: "rgb(209, 230, 254, 0.5)",
  },
  field: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  btnWrap: {
    textAlign: "center",
    width: "100%",
  },
  btn: {
    borderRadius: 20,
    height: 50,
    textTransform: "none",
    fontSize: 18,
    width: "20%",
    border: "1px solid #2A8D88",
    color: "#2A8D88",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#2A8D88",
      color: "white",
    },
  },
});

const RequestQuote = (props) => {
  const { classes, match, history, signedIn } = props;
  const [businessName, setBusinessName] = useState(match.params.bus);
  const [quoteSent, setQuoteSent] = useState(false);
  const [duration, setDuration] = useState("");

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = () => {
    setQuoteSent(true);
    window.setTimeout(() => {
      history.push("/marketplace");
    }, 1000);
  };
  const handleCloseSnackbar = () => {
    setQuoteSent(false);
  };

  return (
    <>
      <Navbar signedIn={signedIn} logOut={props.logOut} />
      <div className={classes.banner}>
        <h1 style={{ height: "100%" }}>Request for Quote</h1>
      </div>
      <Container maxWidth="lg">
        <Paper className={classes.paper} elevation={6}>
          <Grid className={classes.form} container spacing={4} justify="center">
            <Grid item xs={5}>
              <TextField
                required
                className={classes.field}
                fullWidth
                variant="outlined"
                label="First Name"
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Business Name"
                value={businessName}
              />
              <TextField
                required
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Phone Number"
              />
              <TextField
                required
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Commodity Type"
              />
              <TextField
                required
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Pick Up Address"
              />
              <TextField
                required
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Commodity Value"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Contact Duration"
                select
                onChange={handleDuration}
                value={duration}
              >
                <MenuItem value="oneYear">1 year</MenuItem>
                <MenuItem value="oneMonth">1 month</MenuItem>
                <MenuItem value="sixMonths">6 months</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Last Name"
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Business Location"
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Title"
              />
              <TextField
                required
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Zip Code"
              />
              <TextField
                required
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Delivery Address"
              />
              <TextField
                required
                className={classes.field}
                fullWidth
                variant="outlined"
                label="Weight"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Kg</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <div className={classes.inputBox}>
              <p>
                Please select any other preliminary information you can provide:
              </p>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox style={{ color: "#2A8D88" }} name="insurance" />
                  }
                  label="Insurance Policy"
                />
                <FormControlLabel
                  control={
                    <Checkbox style={{ color: "#2A8D88" }} name="one-off" />
                  }
                  label="One-off Transaction"
                />
                <FormControlLabel
                  control={
                    <Checkbox style={{ color: "#2A8D88" }} name="open bid" />
                  }
                  label="Open Bid"
                />
              </FormGroup>
              <br />
              <TextField
                className={classes.field}
                multiline
                rows={6}
                fullWidth
                label="Notes"
                variant="outlined"
              />
            </div>
            <div className={classes.btnWrap}>
              <Button
                className={classes.btn}
                variant="outlined"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
            <Snackbar
              open={quoteSent}
              onClose={handleCloseSnackbar}
              message="Quote Sent!"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            />
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default withStyles(styles)(RequestQuote);
