import React from "react";
import { Divider, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Fab } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(10),

    paddingTop: theme.spacing(6),
  },
  svgimage: {
    height: "15%",
    width: "15%",
  },
  font: {},
  padding: {
    paddingTop: theme.spacing(5),
  },
}));
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const ElementsNotFound = (props) => {
  const retryRefreshButton = (action, type) => (
    <Fab
      variant="extended"
      size="medium"
      aria-label="add"
      className={classes.button}
      onClick={action}
    >
      <RefreshIcon
        className={classes.extendedIcon}
        style={{ color: teal[500] }}
      />
      {type === "retry" ? "REINTENTAR" : "REFRESCAR"}
    </Fab>
  );
  //props 1 means that found 0 elements in the request, props 2 means error
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        alignItems="baseline"
        align="center"
        justify="center"
        className={classes.container}
      >
        <Grid item xs={12} sm={12}>
          {props.option === 1 ? (
            <SearchIcon className={classes.svgimage} />
          ) : (
            <ErrorOutlineIcon className={classes.svgimage} />
          )}
        </Grid>
        <Grid item xs={12} sm={12} className={classes.font}>
          <Typography variant="h4"> {props.label}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.padding}>
          {retryRefreshButton(props.method, props.type)}
        </Grid>
      </Grid>{" "}
    </ThemeProvider>
  );
};

export default ElementsNotFound;
