import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
//import { AuthContext } from "../../../../context/AuthContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { removeAllKeys } from "../../../../common/utils-storage";
import { Tooltip, ListItemIcon, ListItemText } from "@material-ui/core";
import { withRouter } from "react-router";
import { getRouteByUserType } from "../../../../common/utils";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: 240,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 50,
      paddingLeft: 25,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "white",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    color: "grey",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
  },
  container: {
    flexGrow: 1,
    width: "100%",
  },
  CardContainer: {
    paddingTop: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: "relative",
    borderRadius: "50px",
    backgroundColor: "#bcbcbc",
    "&:hover": {
      backgroundColor: "#acacac",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "80%",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "white",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    alignItems: "center",
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  userText: {
    color: "black",
    paddingRight: "30px",
  },
  account: {
    color: "grey",
  },
  cod: {
    color: "grey",
  },
}));

const Topbar = (props) => {
  const classes = useStyles();
  //const { authState, authDispatch } = useContext(AuthContext);
  //const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { onSidebarOpen } = props;
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
/*
  const signOutHandler = () => {
    removeAllKeys();
    setAnchorEl(null);
    handleMobileMenuClose();
    authDispatch({
      type: "LOGOUT",
      payload: {
        auth: false,
        email: null,
        userType: null,
        name: null,
        lastname: null,
        id: null,
        tkn: null,
      },
    });
    props.history.push("/");
  };
  const myAccountHandler = (userType) => {
    const route = getRouteByUserType(userType, "my-account");
    props.history.push(route);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
*/
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Tooltip title="Menú de opciones">
            <AccountCircle />
          </Tooltip>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.prueba}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              //*onClick={handleDrawerToggle}*/
              onClick={onSidebarOpen}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.search}></div>
            <div className={classes.sectionDesktop}>
              <Typography variant="subtitle1" className={classes.cod}>
                Holis
              </Typography>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
              >
                <Tooltip title="Menú de opciones">
                  <AccountCircle />
                </Tooltip>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                >
                  <Tooltip title="Menú de opciones">
                    <AccountCircle />
                  </Tooltip>
                </IconButton>
              </MenuItem>
              <p></p>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem >
            <ListItemIcon>
              <AccountBoxIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Mi cuenta" />
          </MenuItem>

          <MenuItem
            style={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Cerrar sesión" />
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default withRouter(Topbar);
