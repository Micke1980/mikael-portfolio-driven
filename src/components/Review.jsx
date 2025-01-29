import React from "react";
import { Stack, Typography, Avatar, Paper, Box } from "@mui/material";

export default function Review({ author, img, reviewText, title }) {
  return (
    <Paper
      elevation={3}
      sx={{ backgroundColor: "background.light", padding: 4 }}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          color="text.dark"
          variant="subtitle2"
          sx={{
            textAlign: "center",
            fontSize: "1.25rem",
            marginBottom: "32px",
            fontStyle: "italic",
          }}
        >
          "{reviewText}"
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <Avatar alt={author} src={img} sx={{ width: 70, height: 70 }} />
          <Box>
            <Typography
              color="text.dark"
              variant="h5"
              component={"p"}
              sx={{ fontWeight: "600" }}
            >
              {author}
            </Typography>
            <Typography color="text.dark" variant="body1">
              {title}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
}
