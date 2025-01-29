import React from "react";
import { Stack, Typography } from "@mui/material";

export default function Header({ id, text, isLight }) {
  const getHeaderColor = () => {
    return isLight ? "text.dark" : "text.primary";
  };

  return (
    <Stack
      direction={"row"}
      spacing={2}
      alignItems={"start"}
      sx={{ marginBottom: 8 }}
    >
      <Typography color="secondary" variant="h4">
        0{id}.
      </Typography>
      <Typography color={getHeaderColor()} variant="h4">
        {text}
      </Typography>
    </Stack>
  );
}
