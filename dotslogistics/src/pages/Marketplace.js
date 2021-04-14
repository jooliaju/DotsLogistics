import React, { useState } from "react";
import {
  Grid,
  Container,
  Button,
  Menu,
  MenuItem,
  TextField,
  withStyles,
  IconButton,
  Snackbar,
  ClickAwayListener,
  Tooltip,
} from "@material-ui/core";
import Search from "../components/marketplace/Search";
import Business from "../components/marketplace/Business";
import BusinessCard from "../components/marketplace/BusinessCard";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Map from "../assets/map.jpg";
import Message from "../components/marketplace/Message.js";
import GoogleMapReact from "google-map-react";
import Navbar from "../components/navbar/Navbar";
import businesses from "../data/businesses.js";

const styles = () => ({
  optionsBtn: {
    margin: 10,
    textTransform: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  view: {
    display: "flex",
  },
  field: {
    marginTop: 10,
    marginBottom: 10,
  },
  mapCenter: {
    paddingLeft: 65,
    paddingRight: 65,
  },
});

const Marketplace = (props) => {
  const { classes, history, signedIn } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [sort, setSort] = useState(null);
  const [msgPanel, setMsgPanel] = useState(false);
  const [partner, setPartner] = useState(null);
  const [view, setView] = useState("card");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [displayBus, setDisplayBus] = useState(businesses);

  const handleSortClick = (e) => {
    setAnchorEl(e.target);
  };
  const handleSortClose = () => {
    setAnchorEl(null);
  };
  const handleSortRating = () => {
    setSort("Rating");
    handleSortClose();
  };
  const handleSortPriceL = () => {
    setSort("Price Range Low to High");
    handleSortClose();
  };
  const handleSortPriceH = () => {
    setSort("Price Range High to Low");
    handleSortClose();
  };
  const handleSortNone = () => {
    setSort(null);
    handleSortClose();
  };

  const openMsgPanel = (partner) => {
    setMsgPanel(true);
    setPartner(partner);
  };
  const closeMsgPanel = () => {
    setMsgPanel(false);
    setPartner(null);
  };
  const msgSent = () => {
    setShowSnackbar(true);
    closeMsgPanel();
  };
  const hideSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleCardClick = (partner) => {
    setView("business");
    setPartner(partner);
  };

  const handleSetView = (view) => {
    setView(view);
    history.push("/marketplace");
  };

  const handleSearch = (input) => {
    let temp = businesses;
    if (input.search) {
      temp = temp.filter(
        ({ name }) => name.includes(input.search) || input.search.includes(name)
      );
    }
    if (input.category) {
      temp = temp.filter(({ category }) => category === input.category);
    }
    if (input.location) {
      temp = temp.filter(({ location }) => location === input.location);
    }
    setDisplayBus(temp);
  };

  let sortBusinesses;
  if (sort === "Rating") {
    sortBusinesses = displayBus.sort((a, b) => b.rating - a.rating);
  } else if (sort === "Price Range Low to High") {
    sortBusinesses = displayBus.sort((a, b) => a.price - b.price);
  } else if (sort === "Price Range High to Low") {
    sortBusinesses = displayBus.sort((a, b) => b.price - a.price);
  } else {
    sortBusinesses = [...displayBus];
  }
  const businessCards = sortBusinesses.map((business) => {
    return (
      <BusinessCard
        business={business}
        handleMessageClick={() => openMsgPanel(business)}
        handleCardClick={() => handleCardClick(business)}
        {...props}
      />
    );
  });

  const options = (
    <Grid container justify="flex-end">
      <Grid item xs={2}>
        {view !== "map" && (
          <Button
            className={classes.optionsBtn}
            style={{
              backgroundColor: "transparent",
            }}
            disableRipple
            onClick={() => setDisplayBus(businesses)}
          >
            Display all items
          </Button>
        )}
      </Grid>
      <Grid item xs={1}>
        <div className={classes.view}>
          <p>View</p>
          <Tooltip title="Map View">
            <IconButton
              style={{ backgroundColor: "transparent", marginRight: -5 }}
              disableRipple
              onClick={() => handleSetView("map")}
            >
              <LocationOnIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="List View">
            <IconButton
              style={{ backgroundColor: "transparent", marginLeft: -5 }}
              disableRipple
              onClick={() => handleSetView("card")}
            >
              <ViewHeadlineIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Grid>
      <Grid item xs={3} style={{ textAlign: "left" }}>
        {view !== "map" && (
          <>
            <Button
              className={classes.optionsBtn}
              style={{
                backgroundColor: "transparent",
              }}
              onClick={handleSortClick}
              disableRipple
              endIcon={anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            >
              Sort By: {sort ? sort : "-"}
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleSortClose}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={handleSortNone}>-</MenuItem>
              <MenuItem onClick={handleSortRating}>Rating</MenuItem>
              <MenuItem onClick={handleSortPriceL}>
                Price Range Low to High
              </MenuItem>
              <MenuItem onClick={handleSortPriceH}>
                Price Range High to Low
              </MenuItem>
            </Menu>
          </>
        )}
      </Grid>
    </Grid>
  );

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <>
      <Navbar signedIn={signedIn} logOut={props.logOut} />
      <Search handleSearch={handleSearch} />
      <Grid style={{ backgroundColor: "#F0F8FF" }} container justify="center">
        {view === "map" ? (
          <>
            <Grid item xs={10}>
              {options}
            </Grid>
            <Grid className={classes.mapCenter} container spacing={5}>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  className={classes.field}
                  label="Commodity Type"
                />
                <TextField
                  className={classes.field}
                  fullWidth
                  label="Business Category"
                  select
                >
                  <MenuItem>A</MenuItem>
                  <MenuItem>B</MenuItem>
                  <MenuItem>Logistics</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  className={classes.field}
                  label="Location: Zip Code"
                />
                <TextField
                  className={classes.field}
                  fullWidth
                  label="Service"
                  select
                >
                  <MenuItem>A</MenuItem>
                  <MenuItem>B</MenuItem>
                  <MenuItem>Warehouse</MenuItem>
                </TextField>
                <TextField
                  className={classes.field}
                  fullWidth
                  label="Destination"
                  select
                >
                  <MenuItem>North America</MenuItem>
                  <MenuItem>Asia</MenuItem>
                  <MenuItem>International</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={10}>
                {/*<img src={Map} alt="Map" />*/}
                <div style={{ height: "100vh", width: "100%" }}>
                  <GoogleMapReact
                    defaultCenter={{ lat: 59.95, lng: 30.33 }}
                    defaultZoom={11}
                  >
                    <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
              </Grid>
            </Grid>
          </>
        ) : view === "card" ? (
          <Grid item xs={10}>
            {options}
            {businessCards}
          </Grid>
        ) : (
          <Business
            partner={partner}
            handleGoBack={() => handleSetView("card")}
            {...props}
          />
        )}
      </Grid>
      {msgPanel && (
        <ClickAwayListener onClickAway={closeMsgPanel}>
          <Message partner={partner.name} msgSent={msgSent} />
        </ClickAwayListener>
      )}
      <Snackbar
        open={showSnackbar}
        onClose={hideSnackbar}
        message="Message Sent!"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </>
  );
};

export default withStyles(styles)(Marketplace);
