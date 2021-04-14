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
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import OurProcess from "../../assets/ourProcess.jpg";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Message from "./Message.js";
import BusinessIcon from "@material-ui/icons/Business";
import { HashLink as Link } from "react-router-hash-link";
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
  rating: {
    marginTop: 20,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  card: {
    textAlign: "left",
    margin: 50,
  },
  cardWrap: {
    marginTop: 110,
    height: 500,
  },
  btnWrap: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
  btn: {
    borderRadius: 20,
    height: 50,
    textTransform: "none",
  },
  backBtn: {
    width: "100%",
    textAlign: "left",
  },
});

class Business extends Component {
  handleRequestClick = () => {
    this.props.history.push(`/requestquote/${this.props.partner.name}`);
  };

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
          <Grid container>
            <Grid style={{ marginLeft: 20 }} item xs={5}>
              <h3 style={{ fontWeight: 400 }}>{review.name}</h3>
              <p>{review.review}</p>
            </Grid>
            <Grid item xs={1}>
              <Rating
                className={classes.rating}
                value={review.rating}
                disabled
                readOnly
              />
            </Grid>
          </Grid>
        </div>
      );
    });

    return (
      <>
        <div className={classes.backBtn}>
          <IconButton onClick={this.props.handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <Container maxWidth="xl">
          <Grid container spacing={4} justify="center">
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
                src={img}
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
                <div style={{ width: "100%", textAlign: "center" }}>
                  <img
                    src={OurProcess}
                    alt="Our Process"
                    width="70%"
                    height="240"
                  />
                </div>
              </div>
              <div id="reviews">
                <h2 className={classes.subHeader}>Reviews</h2>
                {reviewCards}
              </div>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.cardWrap}>
                <div className={classes.card}>
                  <p>
                    <BusinessIcon style={{ marginRight: 10 }} />
                    <strong>{numPartners}</strong> other companies have hired
                    this business
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
                  <br />
                  <br />
                  <div className={classes.btnWrap}>
                    <Link
                      to="/marketplace#process"
                      style={{ textDecoration: "none" }}
                    >
                      <Button className={classes.btn} variant="outlined">
                        How We Work
                      </Button>
                    </Link>
                    <Button
                      className={classes.btn}
                      variant="contained"
                      onClick={this.handleRequestClick}
                    >
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
