import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ marginTop: "64px" }}>
      <Typography variant="h1" color={"text.primary"}>
        404 error
      </Typography>
      <Typography variant="h5" color={"text.primary"} gutterBottom>
        Den här sidan finns inte...
      </Typography>
      <Button variant="contained" to="/" component={Link}>
        Gå tillbaka
      </Button>
    </Container>
  );
}
