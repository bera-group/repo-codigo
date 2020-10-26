import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Tooltip,
} from "@material-ui/core";
import logo from "./img/logo-login.png";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ContactPage from "@material-ui/icons/ChromeReaderMode";
import WorkIcon from "@material-ui/icons/Work";
//import { AuthContext } from "../../../../context/AuthContext";
import { USER_TYPES } from "../../../../common/values";
import AssignmentIcon from '@material-ui/icons/Assignment';
import StorageIcon from "@material-ui/icons/Storage";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    
  }, 
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
  blockIcon: {
    marginRight: theme.spacing(1),
  },
  lobutton: {
    backgroundColor: "#1438A6",
    color: "#F2F2F2",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Sidebar = (props) => {
  const { open, variant, history, onClose } = props;
  const classes = useStyles();
  //const { authState } = useContext(AuthContext);
  const [openMenuExpand, setOpenMenuExpand] = useState(true);
  const [openVacExpand, setOpenVacExpand] = useState(false);

  const handleMenuExpandClick = () => {
    setOpenMenuExpand(!openMenuExpand);
  };

  const handleVacExpandClick = () => {
    setOpenVacExpand(!openVacExpand);
  };

  const handleLinkTo = (to) => {
    onClose();
    history.push(to);
  };

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div>
        <div className={classes.toolbar} />
        <div className="asideimage">
          <a href="https://bera-group.com/">
            <Tooltip title="Ir a Pagina oficial Bera Group">
              <img src={logo} alt={"logo"} className="img-login" />
            </Tooltip>
          </a>
        </div>
        <List>
          <ListItem
            button
            onClick={() => handleVacExpandClick()}
            key="Menu vacantes"
          >
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary="Menú vacantes" />
            {openVacExpand ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openVacExpand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                onClick={() =>
                  handleLinkTo(
                    "/adminv/vacancies"
                  )
                }
                className={classes.nested}
              >
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Vacantes" />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  handleLinkTo(
                    "/adminv/processes"
                  )
                }
                className={classes.nested}
              >
                <ListItemIcon>

                  <PeopleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Procesos Asignados" />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  handleLinkTo(
                     "/adminv/processes-assigned"
                  )
                }
                className={classes.nested}
              >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Procesos Asignados" />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  handleLinkTo(
                    "/adminv/postulantes"
                  )
                }
                className={classes.nested}
              >
                <ListItemIcon>
                  <ContactPage />
                </ListItemIcon>
                <ListItemText primary="Posibles postulantes" />
              </ListItem>
            </List>
          </Collapse>

          
        </List>

        {/* <List>
          <ListItem button onClick={handleDashboard} key='Dashboard'>
            <ListItemIcon>
              <AvTimerIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>

          <ListItem button onClick={handleLClick} key='Menu'>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary='Menú' />
            {openn ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openn} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button onClick={handleUser} className={classes.nested}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary='Usuarios' />
              </ListItem>
            </List>
            <List component='div' disablePadding>
              <ListItem
                button
                onClick={() => handlePruebas()}
                className={classes.nested}>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary='Pruebas' />
              </ListItem>
            </List>
            <List component='div' disablePadding>
              <ListItem
                button
                onClick={handleQuestions}
                className={classes.nested}>
                <ListItemIcon>
                  <FormatListBulletedIcon />
                </ListItemIcon>
                <ListItemText primary='Preguntas' />
              </ListItem>
              <ListItem
                button
                key='Manuales/Tutoriales'
                onClick={() => {
                  handleTutorial();
                }}>
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary='Manuales/Tutoriales' />
              </ListItem>
            </List>
          </Collapse>
        </List> */}
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default withRouter(Sidebar);
