import React from "react";
import { Divider, Grid } from "@material-ui/core";

const TextDivider = (props) => {
  return (
    <Grid container spacing={2} alignItems="baseline">
      <Grid item sm={5} xs={12}>
        <Divider />
      </Grid>
      <Grid item sm={2} xs={12}>
        {props.children}
      </Grid>
      <Grid item sm={5} xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default TextDivider;
