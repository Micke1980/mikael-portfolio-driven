import React from "react";
import projects from "../assets/hero-projects.png";
import { Box, Stack, Button, Typography, Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { NavHashLink } from "react-router-hash-link";

export default function Hero({
  title,
  subtitle,
  cta1,
  cta2,
  statistic1,
  statistic2,
}) {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        minHeight: { xs: "auto", md: "calc(80vh - 64px)" },
        paddingTop: 8,
        paddingBottom: { xs: 6, md: 16 },
        textAlign: "center",
      }}
      spacing={{ xs: 4, md: 4 }}
    >
      <Grid item xs={12} md={8}>
        <Typography
          color="text.primary"
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "2.5rem", md: "3.75rem" },
            fontWeight: "400",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          gutterBottom
          sx={{
            fontSize: { xs: "1.125rem", md: "1.25rem" },
            fontWeight: "400",
          }}
        >
          {subtitle}
        </Typography>
        <Stack
          direction={{ xs: "col", md: "row" }}
          spacing={2}
          sx={{ marginBottom: 2 }}
          justifyContent={"center"}
        >
          <Stack direction={"row"} spacing={1}>
            <CheckIcon color="primary" />
            <Typography variant="body1" color="text.secondary">
              {statistic1}
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <CheckIcon color="primary" />

            <Typography variant="body1" color="text.secondary">
              {statistic2}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent={"center"}>
          <Button onClick={cta1.callback} variant="contained" color="primary">
            {cta1.text}
          </Button>
          <Button
            smooth
            component={NavHashLink}
            to={cta2.to}
            variant="outlined"
            color="primary"
          >
            {cta2.text}
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box
          component={"img"}
          src={projects}
          alt="projects"
          width={"100%"}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>
    </Grid>
  );
}
