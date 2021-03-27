import React from "react";
import { TextField, Grid, Button, withStyles } from "@material-ui/core";
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
    position: "sticky",
    top: 0,
  },
  textField: {
    border: "2px solid",
    backgroundColor: "#e8e8e8",
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

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: 300,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    fullWidth
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {},
}))(MenuItem);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      anchorElSearch: null,
      searchItems: ["a", "b", "c"],
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value,
    });
    const matches = this.state.searchItems.filter(
      (item) => item.indexOf(this.state.search) !== -1
    );
    if (matches.length > 0) {
      this.setState({ ...this.state, anchorElSearch: e.target });
    } else {
      this.setState({ ...this.state, anchorElSearch: null });
    }
  };

  handleClose = () => {
    this.setState({
      ...this.state,
      anchorElSearch: null,
    });
  };

  handleSearch = (e) => {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.searchBanner}>
        <form onSubmit={this.handleSearch}>
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
              <StyledMenu
                anchorEl={this.state.anchorElSearch}
                open={Boolean(this.state.anchorElSearch)}
                onClose={this.handleClose}
              >
                {this.state.searchItems.map((item) => (
                  <StyledMenuItem>{item}</StyledMenuItem>
                ))}
              </StyledMenu>
            </Grid>
            <Grid container item xs={2}>
              <TextField
                className={classes.textField}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                placeholder="Category"
              />
            </Grid>
            <Grid container item xs={2}>
              <TextField
                className={classes.textField}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                placeholder="Location"
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
