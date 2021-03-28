import React, { Component, useState } from "react";
import {
  Grid,
  Container,
  Button,
  Menu,
  MenuItem,
  TextField,
  withStyles,
  Avatar,
  Card,
  IconButton,
  ClickAwayListener,
} from "@material-ui/core";
import Search from "./Search";
import BusinessCard from "./BusinessCard";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Rating from "@material-ui/lab/Rating";
import BusinessImage from "../../assets/turtwig.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import OurProcess from "../../assets/ourProcess.jpg";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Message from "./Message.js";
import BusinessIcon from "@material-ui/icons/Business";

import GoogleMapReact from "google-map-react";

const styles = () => ({
  details: {
    textAlign: "left",
  },
  subHeader: {
    fontWeight: 400,
  },
  businessImage: {
    border: "1px solid",
  },
  reviewCard: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    margin: 15,
  },
  review: {
    paddingLeft: 15,
  },
  reviewBus: {
    display: "flex",
    width: "100%",
  },
  rating: {
    paddingLeft: 15,
    marginTop: 20,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  card: {
    textAlign: "left",
    margin: 30,
  },
  btnWrap: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
  btn: {
    borderRadius: 20,
    width: "40%",
    height: 50,
    textTransform: "none",
  },
});

class Business extends Component {
  render() {
    const { classes, partner } = this.props;
    const {
      name,
      rating,
      location,
      desc,
      img,
      price,
      reviews,
      numPartners,
    } = partner;

    const reviewCards = reviews.map((review) => {
      return (
        <div className={classes.reviewCard}>
          <Avatar className={classes.avatar} alt={review.name} />
          <div className={classes.review}>
            <div className={classes.reviewBus}>
              <h3 style={{ fontWeight: 400 }}>{review.name}</h3>
              <Rating
                className={classes.rating}
                value={review.rating}
                disabled
                readOnly
              />
            </div>
            <p>{review.review}</p>
          </div>
        </div>
      );
    });

    return (
      <>
        <div>
          <IconButton onClick={this.props.handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid className={classes.details} item xs={7}>
              <h2>{name}</h2>
              <div style={{ display: "flex" }}>
                <Rating value={rating} disabled readOnly />
                <a href="#reviews">
                  <p style={{ fontSize: "16px", marginTop: 0, marginLeft: 20 }}>
                    {`${reviews.length} reviews`}
                  </p>
                </a>
                <p style={{ fontSize: "16px", marginTop: 0, marginLeft: 20 }}>
                  {location}
                </p>
              </div>
              <img
                className={classes.businessImage}
                src={BusinessImage}
                alt="Turtwig"
                width="100%"
                height="500"
              />
              <div id="overview">
                <h2 className={classes.subHeader}>Overview</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div id="services">
                <h2 className={classes.subHeader}>Services & Prices</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div id="process">
                <h2 className={classes.subHeader}>Our Process</h2>
                <img
                  src={OurProcess}
                  alt="Our Process"
                  width="100%"
                  height="240"
                />
              </div>
              <div id="reviews">
                <h2 className={classes.subHeader}>Reviews</h2>
                {reviewCards}
              </div>
            </Grid>
            <Grid item xs={5}>
              <Card style={{ marginTop: 30 }}>
                <div className={classes.card}>
                  <p>
                    <BusinessIcon style={{ marginRight: 10 }} />
                    {`${numPartners} other companies have hired this business`}
                  </p>
                  <p>
                    <LocalAtmIcon style={{ marginRight: 10 }} />
                    Average Budget
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <div className={classes.btnWrap}>
                    <Button className={classes.btn} variant="outlined">
                      How We Work
                    </Button>
                    <Button className={classes.btn} variant="contained">
                      Request a Quote
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(Business);
