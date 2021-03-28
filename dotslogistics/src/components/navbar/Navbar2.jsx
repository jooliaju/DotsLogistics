import React from 'react'
import Grid from '@material-ui/core/Grid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      paper: {
        marginRight: theme.spacing(2),
      },
  }));

export default function Navbar2() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


    return (
        <nav className= "NavbarItems">
            <Grid container spacing={3}>
                <Grid item xs = {3}>
                    DotsLogistics
                </Grid>
                <Grid item xs = {3}>
                    
                </Grid>
                <Grid item xs = {1}>
                    <Button>
                    Home
                    </Button>
                </Grid>
                <Grid item xs = {1}>
                    <Button>
                    Features
                    </Button>
                </Grid>
                <Grid item xs = {1}>
                    <Button>
                    Marketplace
                    </Button>
                </Grid>
                <Grid item xs = {1}>
                    <Button>
                        News
                    </Button>
                </Grid>
                <Grid item xs = {1}>
                    <Button>
                        About Us
                    </Button>
                </Grid>
                <Grid item xs = {1} >
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    >
                    My Account
                </Button>
                <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>My Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My Dashboard</MenuItem>
                    <MenuItem onClick={handleClose}>Support</MenuItem>
                    <MenuItem onClick={handleClose}>Sign Out</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
                </Grid>

            </Grid>
        </nav>
    )
}
