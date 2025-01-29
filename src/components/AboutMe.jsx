import React from "react";
import {
  Box,
  Grid,
  Typography,
  Stack,
  Container,
  Paper,
  Button,
} from "@mui/material";
import Header from "./Header";

export default function AboutMe({
  title,
  subtitle,
  cta,
  statistics,
  profilePicture,
}) {
  return (
    <Paper
      id="about"
      sx={{
        marginBottom: 10,
        padding: "80px 0px 140px 0px",
        backgroundColor: "background.light",
      }}
      elevation={12}
      square
    >
      <Container>
        <Header id="2" text="Om mig" isLight={true} />
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={4}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Box component={"img"} src={profilePicture} width="100%" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Stack direction={"column"} spacing={4}>
              <Typography
                variant="h3"
                color={"text.dark"}
                sx={{ fontWeight: "600" }}
              >
                {title}
              </Typography>
              <Typography variant="body1" color={"text.dark"}>
                {subtitle}
              </Typography>
              <Stack direction={"row"} spacing={6}>
                {statistics.map(({ statistic, text }, i) => (
                  <Box key={i}>
                    <Typography variant="h4" color={"text.dark"} gutterBottom>
                      {statistic}
                    </Typography>
                    <Typography variant="body1" color={"text.dark"}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Button
                variant={"contained"}
                color="secondary"
                onClick={cta.callback}
              >
                {cta.text}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
