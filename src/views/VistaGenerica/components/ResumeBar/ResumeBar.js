import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import logo from "../../../../assets/img/logo-login.png";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    padding: 2,
    textAlign: "center",
  },
  inside: {
    textAlign: "left",
  },
  accepted: {
    color: "green",
  },
  wrong: {
    color: "red",
  },
  progress: {
    marginTop: 2,
  },
});

const ResumeBar = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} className={classes.title}>
            {/*<img src={logo} alt="Bera logo" />*/}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ResumeBar;
