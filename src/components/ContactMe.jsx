import { Stack, Typography, Box, Container, Button } from "@mui/material";
import React from "react";
import Header from "./Header";

export default function ContactMe({ title, subtitle, cta }) {
  return (
    <Box id="contact">
      <Header id="5" text="Kontakta mig" isLight={false} />

      <Container maxWidth="sm">
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ textAlign: "center" }}
        >
          <Typography variant="h3" color="text.primary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {subtitle}
          </Typography>
          <Button
            onClick={cta.callback}
            sx={{ marginTop: 6 }}
            variant="contained"
          >
            {cta.text}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
