import React from "react";
import { Grid, Button, IconButton, withStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import BusinessImage from "../../assets/turtwig.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const styles = () => ({
  imgContainer: {
    position: "relative",
  },
  businessImage: {
    border: "1px solid",
  },
  businessDetails: {
    textAlign: "left",
  },
  button: {
    width: 200,
    height: 50,
    textTransform: "none",
    fontSize: 16,
    borderRadius: 0,
    marginBottom: 20,
  },
  buttonWrapper: {
    marginTop: 40,
    marginBottom: 40,
  },
  favouriteBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  readMoreBtn: {
    margin: 10,
    textTransform: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

class BusinessCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
    };
  }

  handleRequestClick = () => {
    this.props.history.push(`/requestquote/${this.props.business.name}`);
  };

  handleMessageClick = () => {
    this.props.handleMessageClick();
  };

  handleFavouriteClick = () => {
    this.setState({ favourite: this.state.favourite ? false : true });
  };

  render() {
    const { classes, business, handleCardClick } = this.props;
    const { name, location, desc, rating } = business;
    return (
      <Grid container spacing={5} justify="center">
        <Grid item>
          <div className={classes.imgContainer}>
            <img
              className={classes.businessImage}
              src={BusinessImage}
              alt="Turtwig"
              width="275"
              height="200"
            />
            <IconButton
              className={classes.favouriteBtn}
              onClick={this.handleFavouriteClick}
              style={{ backgroundColor: "transparent" }}
              disableRipple
            >
              {this.state.favourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </div>
        </Grid>
        <Grid className={classes.businessDetails} item xs={5}>
          <h3>{name}</h3>
          <div style={{ display: "flex" }}>
            <Rating value={rating} disabled readOnly size="small" />
            <p style={{ fontSize: "12px", marginTop: 0, marginLeft: 10 }}>
              {location}
            </p>
          </div>
          <p>{desc}</p>
          <Button
            className={classes.readMoreBtn}
            style={{
              backgroundColor: "transparent",
            }}
            onClick={handleCardClick}
            disableRipple
            endIcon={<KeyboardArrowRightIcon />}
          >
            Read More
          </Button>
        </Grid>
        <Grid className={classes.buttonWrapper} item xs={3}>
          <Button
            className={classes.button}
            variant="contained"
            disableElevation
            fullWidth
            onClick={this.handleRequestClick}
          >
            Request Quote
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            disableElevation
            fullWidth
            onClick={this.handleMessageClick}
          >
            Message
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(BusinessCard);
