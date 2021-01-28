import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    width: "100%",
    minHeight: "20vh",
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://moneylion.nyc3.digitaloceanspaces.com/wp-content/uploads/2019/06/21034721/Facebook-03262018-ML-Branded-1.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

export function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.mainFeaturedPost}>
        <div className={classes.overlay} />
      </Paper>
      <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
        Join Us
      </Typography>
    </React.Fragment>
  );
}
