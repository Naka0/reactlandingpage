import React from "react";
import ImageCard from "./ImageCard";
import { CssBaseline, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));
export default function PlaceToVisit() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageCard />
    </div>
  );
}
