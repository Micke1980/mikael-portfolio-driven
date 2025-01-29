import { Box, Typography } from "@mui/material";
import React from "react";

const License = () => {
  return (
    <Box style={{ padding: "20px" }}>
      <Typography color="text.primary">License Agreement</Typography>
      <Typography color="text.primary">
        <strong>Effective Date:</strong> [Insert Date]
      </Typography>
      <Typography color="text.primary">
        <strong>Licensor:</strong> Techover AB
      </Typography>
      <Typography color="text.primary">
        <strong>Licensee:</strong> [Student Name]
      </Typography>
      <Typography color="text.primary">
        This License Agreement (“Agreement”) governs the use of the website
        portfolio template (“Template”) provided by Techover AB to the Licensee
        as part of the web development training program.
      </Typography>
      <Typography color="text.primary">1. Grant of License</Typography>
      <Typography color="text.primary">
        <strong>1.1 License:</strong> Techover AB grants the Licensee a
        non-exclusive, non-transferable, revocable license to use the Template
        under the terms and conditions specified herein.
      </Typography>
      <Typography color="text.primary">
        <strong>1.2 Permitted Use:</strong> The Licensee is authorized to use
        the Template solely for their personal and professional development to
        showcase their work and skills, with the purpose of securing employment
        or advancing their professional career.
      </Typography>
      <Typography color="text.primary">
        <strong>1.3 Prohibited Uses:</strong>
        <ul>
          <li>
            The Licensee may not share, distribute, or otherwise make the
            Template available to others, whether for free or for compensation.
          </li>
          <li>
            The Licensee may not use the Template as part of any paid or unpaid
            service, including but not limited to freelance projects or other
            business purposes.
          </li>
          <li>
            The Licensee may not sublicense, resell, or transfer any rights
            under this Agreement to third parties.
          </li>
        </ul>
      </Typography>
      {/* Add the remaining sections of the license here */}
    </Box>
  );
};

export default License;
