import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";


import '../index.scss'; 


const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#ffffff" };
  else return { color: "#ffffff" };
};
const Menu = withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar className='nav'>
      <Link to='/' id="logo"><p type="title" className='logo'>
        unbiased.io
      </p></Link>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <Home />
        </IconButton>
      </Link>
      {!auth.isAuthenticated() && (
        <span>
          <Link to="/signup" id="logo">
            <Button style={isActive(history, "/signup")}>Sign up</Button>
          </Link>
          <Link to="/signin" id="logo">
            <Button style={isActive(history, "/signin")}>Sign In</Button>
          </Link>
        </span>
      )}
      {auth.isAuthenticated() && (
        <span>
          <Link to={"/users/" + auth.isAuthenticated().user._id}>
            <Button
              style={isActive(
                history,
                "/users/" + auth.isAuthenticated().user._id
              )}
            >
              My Profile
            </Button>
          </Link>
          <Button
            color="inherit"
            onClick={() => {
              auth.signout(() => history.push("/"));
            }}
          >
            Sign out
          </Button>
        </span>
      )}
    </Toolbar>
  </AppBar>
));

export default Menu;
