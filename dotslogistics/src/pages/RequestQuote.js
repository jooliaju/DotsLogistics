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
} from "@material-ui/core";
import SearchBanner from "../assets/searchBanner.jpg";

const styles = () => ({
  banner: {
    height: 300,
    backgroundImage: `url(${SearchBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    padding: 60,
    opacity: 0.4,
    alignItems: "center",
    position: "sticky",
    top: 0,
  },
  title: {
    height: 100,
    padding: 15,
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
  },
  field: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const RequestQuote = (props) => {
  const { classes } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState(""); //get business name through props

  const handleChange = (field) => (e) => {
    switch (field) {
      case 1:
        setFirstName(e.target.value);
        break;
      case 2:
        setLastName(e.target.value);
        break;
      case 3:
        setBusinessName(e.target.value);
        break;
      default:
        return e.target.value;
    }
  };

  return (
    <>
      <div className={classes.banner}></div>
      <Container maxWidth="md">
        <Paper className={classes.paper} elevation={6}>
          <div className={classes.title}>
            <h1>Request for Quote</h1>
          </div>
          <Grid className={classes.form} container spacing={4} justify="center">
            <Grid item xs={5}>
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="First Name"
                onChange={() => handleChange(1)}
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Business Name"
                onChange={() => handleChange(3)}
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Phone Number"
                onChange={() => handleChange(5)}
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Commodity Type"
                onChange={() => handleChange(7)}
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Pick Up Address"
                onChange={() => handleChange(9)}
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Commodity Value"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                onChange={() => handleChange(11)}
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Contact Duration"
                select
                onChange={() => handleChange(13)}
              >
                <MenuItem>1 year</MenuItem>
                <MenuItem>1 month</MenuItem>
                <MenuItem>6 months</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={5}>
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Last Name"
                onChange={() => handleChange(2)}
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Business Location"
                onChange={() => handleChange(4)}
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Title"
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Zip Code"
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Delivery Address"
                onChange={() => handleChange(10)}
              />
              <TextField
                className={classes.field}
                fullWidth
                variant="filled"
                label="Weight"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Kg</InputAdornment>
                  ),
                }}
                onChange={() => handleChange(12)}
              />
            </Grid>
            <div className={classes.inputBox}>
              <p>
                Please select any other preliminary information you can provide:
              </p>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="insurance" />}
                  label="Insurance Policy"
                />
                <FormControlLabel
                  control={<Checkbox name="one-off" />}
                  label="One-off Transaction"
                />
                <FormControlLabel
                  control={<Checkbox name="open bid" />}
                  label="Open Bid"
                />
              </FormGroup>
              <br />
              <TextField
                multiline
                rows={12}
                fullWidth
                label="Notes"
                variant="outlined"
              />
            </div>
            <Button>Submit</Button>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default withStyles(styles)(RequestQuote);
