import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-circular-progressbar/dist/styles.css";
import ButtonDialog from "./ButtonDialog";
 
const myStyle = makeStyles((theme) => ({
  card: {
    maxWidth: 320,
    minWidth: 320,
    maxHeight: 38,
    minHeight: 70,
  },
  media: {
    height: 0,
    paddingTop: "10px", // 16:9
  },

  cardHeader: {
    backgroundColor: "#bdbdbd",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
  },
  icon: {
    color: "gray",
    width: 30,
    height: 30,
  },
  cardTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
  },
  circular: {
    height: "150px",
  },
}));

const AddUser = (props) => {
  const classes = myStyle();
  return (
    <>
      <ButtonDialog
        className={classes.icon}
        groups={props.groups}
        updateUsers={props.updateUsers}
      />
    </>
  );
};

export default AddUser;
