import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../pictures/dotsLogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {

  const history = useHistory();
  


  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hoverResources, setHoverResources] = React.useState(false);
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
    if (event.key === "Tab") {
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
    <>
      <nav className="navbar" style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} style={{ width: "60%" }}></img>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/marketplace"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              MarketPlace
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
              onMouseEnter={() => setHoverResources(true)}
              onMouseLeave={() => setHoverResources(false)}
            >
              {hoverResources ? "Coming Soon" : "Resources"}
            </Link>
          </li>
          


          <Button
          
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style = {{textTransform: 'none', color: 'white', fontSize : '18px'}}
          
        >
          <div className = "myaccount" >
            My Account
          </div>
          
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} >
                    <MenuItem >
                          <Link to= '/profile' style ={{textDecoration: 'none', color: "black"}}>
                             Profile
                          </Link>
                      </MenuItem>
                    <MenuItem>
                    
                          <Link to= '/dash' style ={{textDecoration: 'none', color: "black"}}>
                             Dashboard
                          </Link>
                        
                    </MenuItem>
                    <MenuItem ><Link to= '/settings' style ={{textDecoration: 'none', color: "black"}}>
                             Account Settings
                          </Link></MenuItem>
                    <MenuItem ><Link to= '/logout' style ={{textDecoration: 'none', color: "black"}}>
                             Log Out
                          </Link></MenuItem>

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

{/*         
        <div style= {{height: '100%', paddingTop: '20px', paddingBottom: '20px', width: '100px'}}>


        
        <li>
        <Button
          onClick = {()=>history.push('/signup')}
          variant="contained" style = {{background: "#2E666E", color: 'white', fontWeight: 'bold', height: '30px', width: '110px', borderRadius: '20px', justifyContent: 'center', verticalAlign: ''}}
        >
          <div className = "myaccount" >
            Sign Up
          </div>
          
        </Button>
            <Link
              to="/signin"
              className="nav-links"
              onClick={closeMobileMenu}
              style ={{fontSize: '16px'}}
            >
              Sign In
            </Link>
          </li>
        </div> */}


          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
