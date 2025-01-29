import React from "react";
import { Container, Paper } from "@mui/material";
import Header from "./Header";
import Review from "./Review";

export default function ReviewSection({ reviews }) {
  return (
    <>
      <Paper
        id="reviews"
        sx={{
          marginTop: 10,
          marginBottom: 10,
          padding: "80px 0px 140px 0px",
          backgroundColor: "background.light",
        }}
        elevation={12}
        square
      >
        <Container>
          <Header id="4" text="Vad andra säger om mig" isLight={true} />
          <Container maxWidth={"md"}>
            {reviews.map((review, i) => (
              <Review {...review} key={i} />
            ))}
          </Container>
        </Container>
      </Paper>
    </>
  );
}
