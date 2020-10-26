import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useMediaQuery, Button, IconButton } from "@material-ui/core";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Sidebar, Topbar } from "./components";
//import CustomSnackbar from "./../../Components/CustomSnackbar/CustomSnackbar";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
   
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    height: "100%",
  },
  icon: {
    color: "white",
  },
}));

const Main = (props) => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  //const shouldOpenSidebar = isDesktop ? true : openSidebar;
  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return (
    <SnackbarProvider
      hideIconVariant
      maxSnack={6}
      ref={notistackRef}
      action={(key) => (
        <IconButton variant={"filled"} onClick={onClickDismiss(key)}>
          <CloseRoundedIcon className={classes.icon} />
        </IconButton>
      )}
    >
      <div
        className={clsx({
          [classes.root]: true,
        })}
      >
        {/*llamamos al topbar en cualquier vista*/}{" "}
        <Topbar onSidebarOpen={handleSidebarOpen} />
        {/*llamamos al sidebar*/}{" "}
        <Sidebar
          onClose={handleSidebarClose}
        />
        {/*EN EL MAIN LLAMAMOS AL HIJO QUE SERÁ EL LAYOUT DE CUALQUIER VISTA*/}
        <main className={classes.content}>{children}</main>
      </div>
    </SnackbarProvider>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
