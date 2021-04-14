import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  Grid,
  Button,
  withStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SearchBanner from "../../assets/searchBanner.jpg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = () => ({
  searchBanner: {
    height: 80,
    backgroundImage: `url(${SearchBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    padding: 60,
    opacity: 0.4,
    alignItems: "center",
  },
  textField: {
    border: "2px solid",
    backgroundColor: "#e8e8e8",
    width: "100%",
    "&:hover": {
      backgroundColor: "#e8e8e8",
    },
  },
  searchButton: {
    borderRadius: 0,
    backgroundColor: "black",
    color: "#e8e8e8",
    "&:hover": {
      color: "black",
    },
  },
});

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      category: "",
      location: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value,
    });
  };

  handleSetCategory = (e) => {
    this.setState({ ...this.state, category: e.target.value });
  };

  handleSetLocation = (e) => {
    this.setState({ ...this.state, location: e.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.searchBanner}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleSearch(this.state);
          }}
        >
          <Grid container spacing={2} justify="center">
            <Grid container item xs={5}>
              <TextField
                className={classes.textField}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                placeholder="Search for shippers, carriers, or transport services..."
                onChange={this.handleChange}
              />
            </Grid>
            <Grid container item xs={1}>
              <FormControl>
                <InputLabel htmlFor="category">Category</InputLabel>
                <Select
                  className={classes.textField}
                  variant="filled"
                  native
                  value={this.state.category}
                  onChange={this.handleSetCategory}
                  inputProps={{
                    id: "category",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"carrier"}>Carrier</option>
                  <option value={"shipper"}>Shipper</option>
                  <option value={"manufacturer"}>Manufacturer</option>
                  <option value={"warehouse"}>Warehouse</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid container item xs={2}>
              <TextField
                className={classes.textField}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                placeholder="Location"
                onChange={this.handleSetLocation}
              />
            </Grid>
            <Grid container item xs={1}>
              <Button
                className={classes.searchButton}
                fullWidth
                variant="contained"
                disableElevation
                type="submit"
              >
                <SearchIcon fontSize="large" />
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Search);
