import React from "react";
import Hero from "./Hero";
import ReviewSection from "./ReviewSection";
import Projects from "./Projects";
import { Box, Container } from "@mui/material";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import { COPY } from "../data/copy";

export default function HomePage() {
  const { hero, projects, reviews, aboutMe, contact } = COPY;
  // Note that projects and reviews are arrays so we pass the array instead of spreading it

  return (
    <Box>
      <Container>
        <Hero {...hero} />
      </Container>
      <AboutMe {...aboutMe} />
      <Container>
        <Projects projects={projects} />
      </Container>
      <ReviewSection reviews={reviews} />
      <Container>
        <ContactMe {...contact} />
      </Container>
    </Box>
  );
}