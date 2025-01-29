import { Box, Grid, Paper, Typography, Stack, IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import React from "react";

export default function ProjectCard({
  img,
  title,
  description,
  links,
  listOfTechStack,
  rightAlign,
}) {
  const isPhone = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const setRightAlignment = () => {
    if (isPhone) {
      return false;
    } else {
      return rightAlign;
    }
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={setRightAlignment() ? "row" : "row-reverse"}
    >
      <Grid item xs={12} md={7}>
        <Box
          component="img"
          src={img}
          width={"100%"}
          sx={{
            borderRadius: 1,
            height: { xs: "70px", md: "unset" },
            objectFit: "cover",
            display: { xs: "none", md: "unset" },
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{ textAlign: setRightAlignment() ? "right" : "left" }}
      >
        <Typography variant="body1" color="primary">
          Nya projekt
        </Typography>
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{ marginBottom: 2 }}
        >
          {title}
        </Typography>
        <Box
          component="img"
          src={img}
          width={"100%"}
          sx={{
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            height: "130px",
            transform: "translateY(20px)",
            objectFit: "cover",
            display: { xs: "unset", md: "none" },
          }}
        />
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            textAlign: setRightAlignment() ? "right" : "left",
            width: { xs: "unset", md: "110%" },
            transform: {
              xs: "unset",
              md: setRightAlignment() ? "translateX(-9%)" : "translateX(0)",
            },
            boxSizing: { xs: "unset", md: "border-box" },
            marginBottom: 2,
          }}
        >
          <Typography>{description}</Typography>
        </Paper>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={setRightAlignment() ? "end" : "start"}
          sx={{ marginBottom: 2 }}
        >
          {listOfTechStack.map((tech, i) => (
            <Typography key={i} variant="body1" color="text.secondary">
              {tech}
            </Typography>
          ))}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={setRightAlignment() ? "end" : "start"}
        >
          {links.map(({ Icon, href }, i) => (
            <IconButton
              sx={{ color: "text.secondary" }}
              onClick={() => window.open(href, "_blank")}
              key={i}
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}