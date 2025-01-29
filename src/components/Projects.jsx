import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <Box sx={{ paddingBottom: 20 }} id="projects">
      <Header id="3" text="Några saker jag byggt" color="" />
      <Stack direction={"column"} spacing={14}>
        {projects.map((project, i) => (
          <ProjectCard {...project} key={i} />
        ))}
      </Stack>
    </Box>
  );
}
