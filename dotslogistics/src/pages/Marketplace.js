import React, { useState } from "react";
import {
  Grid,
  Container,
  Button,
  Menu,
  MenuItem,
  TextField,
  withStyles,
  Popover,
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
import Rating from "@material-ui/lab/Rating";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Map from "../assets/map.jpg";
import Message from "../components/marketplace/Message.js";
import GoogleMapReact from "google-map-react";
import Navbar from "../components/navbar/Navbar";
import businesses from "../data/businesses.js";
import PinDropIcon from "@material-ui/icons/PinDrop";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

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
  mapFilter: {
    background: "#2E666E",
    color: "white",
    fontWeight: "bold",
    height: "40px",
    width: "45%",
    borderRadius: "20px",
    justifyContent: "center",
    verticalAlign: "",
  },
});

const Marketplace = (props) => {
  const { classes, history, signedIn } = props;
  console.log(signedIn);

  const [anchorEl, setAnchorEl] = useState(null);
  const [sort, setSort] = useState(null);
  const [msgPanel, setMsgPanel] = useState(false);
  const [partner, setPartner] = useState(null);
  const [view, setView] = useState("card");
  const [prevView, setPrevView] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [displayBus, setDisplayBus] = useState(businesses);
  const [busCategory, setBusCategory] = useState("");
  const [service, setService] = useState("");
  const [destination, setDestination] = useState("");
  const [commodity, setCommodity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [lat, setLat] = useState(43.65107);
  const [lng, setLng] = useState(-79.347015);

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
    setPrevView(view);
    setView("business");
    setPartner(partner);
  };

  const handleSetView = (view) => {
    setView(view);
    history.push("/marketplace");
  };

  const handleMapFilter = () => {
    if (destination === "north america") {
      setLat(54.525963);
      setLng(-105.255119);
    } else if (destination === "asia") {
      setLat(34.047863);
      setLng(100.619652);
    } else {
      setLat(43.65107);
      setLng(-79.347015);
    }
  };
  const clearFilters = () => {
    setBusCategory("");
    setService("");
    setDestination("");
    setCommodity("");
    setZipCode("");
  };

  const handleSearch = (input) => {
    setView("card");
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

  const AnyReactComponent = ({ business }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    return (
      <>
        <IconButton
          style={{ background: "transparent" }}
          disableRipple
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <PinDropIcon style={{ fontSize: 50, color: "darkred" }} />
        </IconButton>
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          style={{ width: "70%" }}
        >
          <div style={{ padding: 10 }}>
            <h3>{business.name}</h3>
            <div style={{ display: "flex" }}>
              <Rating value={business.rating} disabled readOnly size="small" />
              <p style={{ fontSize: "12px", marginTop: 0, marginLeft: 10 }}>
                {business.location}
              </p>
            </div>
            <p>{business.desc}</p>
            <Button
              style={{
                background: "transparent",
                textTransform: "none",
              }}
              onClick={() => handleCardClick(business)}
              disableRipple
              endIcon={<KeyboardArrowRightIcon />}
            >
              Read More
            </Button>
          </div>
        </Popover>
      </>
    );
  };

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
                  onChange={(e) => setCommodity(e.target.value)}
                  value={commodity}
                />
                <TextField
                  className={classes.field}
                  fullWidth
                  label="Business Category"
                  select
                  onChange={(e) => setBusCategory(e.target.value)}
                  value={busCategory}
                >
                  <MenuItem value="">-</MenuItem>
                  <MenuItem value="supply chain">Supply Chain</MenuItem>
                  <MenuItem value="logistics">Logistics</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  className={classes.field}
                  label="Location: Zip Code"
                  onChange={(e) => setZipCode(e.target.value)}
                  value={zipCode}
                />
                <TextField
                  className={classes.field}
                  fullWidth
                  label="Service"
                  select
                  onChange={(e) => setService(e.target.value)}
                  value={service}
                >
                  <MenuItem value="">-</MenuItem>
                  <MenuItem value="carrier">Carrier</MenuItem>
                  <MenuItem value="shipper">Shipper</MenuItem>
                  <MenuItem value="manufacturer">Manufacturer</MenuItem>
                  <MenuItem value="warehouse">Warehouse</MenuItem>
                </TextField>
                <TextField
                  className={classes.field}
                  fullWidth
                  label="Destination"
                  select
                  onChange={(e) => setDestination(e.target.value)}
                  value={destination}
                >
                  <MenuItem value="">-</MenuItem>
                  <MenuItem value="north america">North America</MenuItem>
                  <MenuItem value="asia">Asia</MenuItem>
                  <MenuItem value="international">International</MenuItem>
                </TextField>
                <br />
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    variant="contained"
                    fullWidth
                    className={classes.mapFilter}
                    onClick={handleMapFilter}
                  >
                    Search
                  </Button>
                  <Button
                    variant="contained"
                    fullWidth
                    className={classes.mapFilter}
                    onClick={clearFilters}
                  >
                    Clear
                  </Button>
                </div>
              </Grid>
              <Grid item xs={10}>
                {/*<img src={Map} alt="Map" />*/}
                <div style={{ height: "100vh", width: "100%" }}>
                  <GoogleMapReact defaultCenter={{ lat, lng }} defaultZoom={9}>
                    <AnyReactComponent
                      lat={43.65107}
                      lng={-79.347015}
                      business={businesses[0]}
                    />
                    <AnyReactComponent
                      lat={43.589}
                      lng={-79.6441}
                      business={businesses[1]}
                    />
                    <AnyReactComponent
                      lat={43.5448}
                      lng={-80.2482}
                      business={businesses[2]}
                    />
                    <AnyReactComponent
                      lat={43.4516}
                      lng={-80.4925}
                      business={businesses[3]}
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
            handleGoBack={() => handleSetView(prevView)}
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
