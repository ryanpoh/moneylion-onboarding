import React, { useState, useEffect } from "react";
import { useData } from "../DataContext";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import Confetti from "react-confetti";

export const Welcome = (props) => {
  const { data, clearValues } = useData();
  const [success, setSuccess] = useState(false);

  const checkComplete = async (data) => {
    if (data.agreement1 && data.agreement2) {
      await fetch("https://5f79819fe402340016f93139.mockapi.io/api/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      Swal.fire(
        "Great job!",
        "Thank you for your application. We will get back to you soon!",
        "success"
      );
      setSuccess(true);

      //? Normally I would check response with res.status === 200. But endpoint provided keeps returning 404 even when checked with Postman API. Not sure if API still online.
      //? So I added the alert below, so you can see the stringified JSON data that should be sent to endpoint.

      alert("Sent to MockApi:" + JSON.stringify(data));
    }
  };

  useEffect(() => {
    checkComplete(data);
  }, [data]);

  const handleClearNext = () => {
    clearValues();
    props.handleNext();
  };

  return (
    <Container maxWidth="sm">
      {success && <Confetti />}
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        A little bit about MoneyLion...
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        color="textSecondary"
        paragraph
      >
        MoneyLion was founded in 2013 with the belief that we all get ahead when
        nobody gets left behind. We are here for the millions of Americans
        who’ve long been ignored — or even taken advantage of — by traditional
        banks. We are rewiring the American banking system to make money more
        approachable and to give consumers a more accessible and sustainable
        path to their goals. Welcome to MoneyLion, where the 99% can feel 100%
        about their future.
      </Typography>
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button
              onClick={handleClearNext}
              variant="contained"
              color="primary"
            >
              Get started
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
