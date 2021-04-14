import React from "react";
import ImageCard from "./ImageCard";
import places from "../static/places";
import { CssBaseline, makeStyles } from "@material-ui/core";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function PlaceToVisit() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root}>
      <ImageCard place={places[1]} />
      <ImageCard place={places[0]} />
    </div>
  );
}
