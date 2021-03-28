import {
  AppBar,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Divider,
} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/icons/Lock";
/* import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'; */
import axios from "axios";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import { FOOTER, ROUTES } from "../config";
import { getUserFetch, setCurrentChannel, tapMenu } from "../store/actions";
import Footer from "./Footer";
import Header from "./Nav/Header";

const drawerWidth = 180;
const proxyurl = "https://cors-anywhere-dataraction.herokuapp.com/";

if (process.env.REACT_APP_ENV === "dev") {
  axios.defaults.baseURL = proxyurl + "https://api.dot.mai1015.com";
  localStorage.setItem("websocket", "api.dot.mai1015.com");
} else {
  axios.defaults.baseURL = proxyurl + "https://api.dataraction.com";
  localStorage.setItem("websocket", "api.dataraction.com");
}

axios.defaults.retry = 3;
axios.defaults.retryDelay = 1000;

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  const config = err.config;
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry || err.response.status < 500)
    return Promise.reject(err);

  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0;

  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err);
  }

  // Increase the retry count
  config.__retryCount += 1;

  // Create new promise to handle exponential backoff
  const backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, config.retryDelay * (2 * config.__retryCount - 1) || 1);
  });

  // Return the promise in which recalls axios to retry the request
  return backoff.then(function () {
    return axios(config);
  });
});

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(0),
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(7) + 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    width: "100vw",
  },
  pageWrapper: {
    minHeight: window.screen.height * 0.75,
  },
  toolbar: theme.mixins.toolbar,
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menu: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  scrollToTop: {
    position: "fixed",
    bottom: theme.spacing(10),
    right: theme.spacing(5),
  },
  badge: {
    fontSize: 14,
    borderRadius: "25px",
    border: `1px solid ${theme.palette.background.paper}`,
    background: theme.palette.secondary.main,
  },
  channelAvatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
});

class Scaffold extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.props.getUserFetch();
  }

  handleDrawerOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  filterNav = (route) => {
    if (route.devOnly && process.env.REACT_APP_ENV === "dev") {
      // if dev only features
      if (route.profileOnly) {
        // show profile only features
        return this.props.currentUser && this.props.currentUser.accountCreated;
      }
      // show it anyway
      return true;
    }
    if (route.profileOnly && !route.devOnly) {
      // show profile only features
      return this.props.currentUser && this.props.currentUser.accountCreated;
    }
    // show it anyway
    return true;
  };

  renderMobileNav = (classes) => (
    <AppBar position="fixed" className={classes.appBar}>
      <BottomNavigation
        className={classes.sectionMobile}
        value={this.props.menuIndex}
        onChange={(event, newValue) => {
          this.props.tapMenu(newValue);
        }}
        showLabels
      >
        {ROUTES.map((item, index) => {
          const availableNow = this.filterNav(item);
          return (
            <BottomNavigationAction
              key={`bna${index}`}
              color="inherit"
              label={item.label}
              disabled={!availableNow}
              href={item.path}
              icon={
                <Badge
                  color="default"
                  badgeContent={
                    <LockIcon className={classes.badge} color="primary" />
                  }
                  overlap="circle"
                  invisible={availableNow}
                >
                  {this.props.menuIndex === index ? item.activeIcon : item.icon}
                </Badge>
              }
            />
          );
        })}
      </BottomNavigation>
    </AppBar>
  );

  renderMenuNodes = (classes) => {
    return ROUTES.map((item, index) => {
      const availableNow = this.filterNav(item);
      return (
        <ListItem
          button
          key={`closed${index}`}
          component="a"
          href={item.path}
          selected={this.props.menuIndex === index}
          onClick={() => this.props.tapMenu(index)}
          className={classes.menu}
          disabled={!availableNow}
        >
          <ListItemIcon href={item.path}>
            <Badge
              color="default"
              badgeContent={
                <LockIcon className={classes.badge} color="primary" />
              }
              overlap="circle"
              invisible={availableNow}
            >
              {this.props.menuIndex === index ? item.activeIcon : item.icon}
            </Badge>
          </ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      );
    });
  };

  renderChannels = (channels, classes) =>
    Object.keys(channels)
      .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }))
      .map((key, index) => (
        <ListItem
          button
          key={`channel${index}`}
          component="a"
          href={"/#/channels"}
          onClick={() => {
            this.props.tapMenu(null);
            this.props.setCurrentChannel(channels[key].channelTitle);
          }}
        >
          <ListItemIcon>
            <Avatar
              variant="rounded"
              src={channels[key].avatar}
              className={classes.channelAvatar}
            />
          </ListItemIcon>
          <ListItemText primary={channels[key].channelTitle} />
        </ListItem>
      ));
  renderClosedMenu = (classes) => (
    <List>
      {this.renderMenuNodes(classes)}
      {/* <Divider />*/}
      {/* { this.renderChannels(channels, classes) }*/}
    </List>
  );

  renderOpenMenu = (classes) => (
    <List>
      {this.renderMenuNodes(classes)}
      {/* <ListItem >*/}
      {/*    <ListItemText primary={ < Typography variant="body1">Channels</Typography> } />*/}
      {/* </ListItem>*/}
      {/* <Divider />*/}
      {/* { this.renderChannels(channels, classes) }*/}
      <Divider />
      <Box mt={2}>
        <ListItem
          href={
            "https://docs.google.com/forms/d/1ubnO6sbVOxOAzIUHgANYDyec_zhELxcoxoC40Ypghpo/viewform?ts=5e20b84c&edit_requested=true"
          }
          component="a"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/1ubnO6sbVOxOAzIUHgANYDyec_zhELxcoxoC40Ypghpo/viewform?ts=5e20b84c&edit_requested=true",
              "_blank"
            )
          }
        >
          <Typography variant="caption" display="block">
            Feedback
          </Typography>
        </ListItem>
        {FOOTER.map((item, index) => (
          <ListItem
            button
            key={`openfooter${index}`}
            component="a"
            href={item.path}
            onClick={() => this.props.tapMenu(null)}
          >
            <Typography variant="caption" display="block">
              {item.label.split("\n").map((i, key) => {
                return <div key={key}>{i}</div>;
              })}
            </Typography>
          </ListItem>
        ))}
      </Box>
    </List>
  );

  render() {
    const { classes } = this.props;

    return (
      <div classes={classes.root}>
        <CssBaseline />

        <main className={classes.content}>
          <div className={classes.pageWrapper} id="page-wrapper">
            {this.props.child}
          </div>
        </main>
      </div>
    );
  }
}

Scaffold.propTypes = {
  channels: PropTypes.any,
  child: PropTypes.any,
  classes: PropTypes.shape({
    content: PropTypes.any,
    drawer: PropTypes.any,
    drawerClose: PropTypes.any,
    drawerOpen: PropTypes.any,
    root: PropTypes.any,
    toolbar: PropTypes.any,
    pageWrapper: PropTypes.any,
  }),
  currentUser: PropTypes.shape({
    accountCreated: PropTypes.any,
  }),
  getUserFetch: PropTypes.func,
  menuIndex: PropTypes.any,
  setCurrentChannel: PropTypes.func,
  signOut: PropTypes.any,
  signUp: PropTypes.any,
  tapMenu: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    menuIndex: state.nav.menuIndex,
    channels: state.channels,
    auth: state.firebase.auth,
    currentUser: state.auth.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserFetch: () => dispatch(getUserFetch()),
    setCurrentChannel: () => dispatch(setCurrentChannel()),
    tapMenu: () => dispatch(tapMenu()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Scaffold));
