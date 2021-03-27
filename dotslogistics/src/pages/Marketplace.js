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
  ClickAwayListener,
} from "@material-ui/core";
import Search from "../components/marketplace/Search";
import BusinessCard from "../components/marketplace/BusinessCard";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Message from "../components/marketplace/Message.js";

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
});

const Marketplace = (props) => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [sort, setSort] = useState(null);
  const [msgPanel, setMsgPanel] = useState(false);
  const [partner, setPartner] = useState("");
  const [view, setView] = useState("card");

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
    setPartner("");
  };

  const handleSetView = (view) => {
    setView(view);
  };

  const businesses = [
    {
      name: "Dataraction",
      rating: 1,
      location: "Toronto, ON",
      desc: "The Robin Hood of Education!?",
      img: "",
      price: 20,
    },
    {
      name: "DotsLogistics",
      rating: 5,
      location: "Toronto, ON",
      desc: "The Snow Bunnies",
      img: "",
      price: 30,
    },
    {
      name: "Supply R Us",
      rating: 3,
      location: "Guelph, ON",
      desc: "BLAH BLAH BLAH BLAH BLAH",
      img: "",
      price: 60,
    },
    {
      name: "Entropy",
      rating: 2,
      location: "Kitchener, ON",
      desc: "YOYOYOYOYOYOYOYOYOOYOYOYOYOYOYOYOYOYOYO",
      img: "",
      price: 10,
    },
  ];

  let sortBusinesses;
  if (sort === "Rating") {
    sortBusinesses = businesses.sort((a, b) => b.rating - a.rating);
  } else if (sort === "Price Range Low to High") {
    sortBusinesses = businesses.sort((a, b) => a.price - b.price);
  } else if (sort === "Price Range High to Low") {
    sortBusinesses = businesses.sort((a, b) => b.price - a.price);
  } else {
    sortBusinesses = [...businesses];
  }
  const businessCards = sortBusinesses.map((business) => {
    return (
      <BusinessCard
        name={business.name}
        rating={business.rating}
        location={business.location}
        desc={business.desc}
        img={business.img}
        handleMessageClick={openMsgPanel}
      />
    );
  });

  const options = (
    <Grid container justify="flex-end">
      <Grid item xs={2}>
        <Button
          className={classes.optionsBtn}
          style={{
            backgroundColor: "transparent",
          }}
          disableRipple
        >
          Display all items
        </Button>
      </Grid>
      <Grid item xs={1}>
        <div className={classes.view}>
          <p>View</p>
          <IconButton
            style={{ backgroundColor: "transparent", marginRight: -5 }}
            disableRipple
            onClick={() => handleSetView("map")}
          >
            <LocationOnIcon />
          </IconButton>
          <IconButton
            style={{ backgroundColor: "transparent", marginLeft: -5 }}
            disableRipple
            onClick={() => handleSetView("card")}
          >
            <ViewHeadlineIcon />
          </IconButton>
        </div>
      </Grid>
      <Grid item xs={3} style={{ textAlign: "left" }}>
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
      </Grid>
    </Grid>
  );

  return (
    <>
      <Search />
      <Grid container justify="center">
        {view === "map" ? (
          <>
            <Grid item xs={10}>
              {options}
            </Grid>
            <Grid container spacing={2}>
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
                  <MenuItem>A</MenuItem>
                  <MenuItem>B</MenuItem>
                  <MenuItem>International</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={10}></Grid>
            </Grid>
          </>
        ) : (
          <Grid item xs={10}>
            {options}
            {businessCards}
          </Grid>
        )}
      </Grid>
      {msgPanel && (
        <ClickAwayListener onClickAway={closeMsgPanel}>
          <Message partner={partner} />
        </ClickAwayListener>
      )}
    </>
  );
};

export default withStyles(styles)(Marketplace);
