import React, { useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

//directions: up, down, right, left
function TransitionTo(props) {
  return <Slide {...props} direction="up" />;
}

const CustomSnackbar = (props) => {
  const classes = useStyles();
  const [transition, setTransition] = React.useState(undefined);
  useEffect(() => {
    setTransition(() => TransitionTo);
  }, []);
  return (
    <div className={classes.root}>
      <Snackbar
        open={props.open}
        autoHideDuration={props.duration || 3000}
        onClose={props.handleClose}
        TransitionComponent={transition}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={props.handleClose}
          severity={props.severity}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackbar;
