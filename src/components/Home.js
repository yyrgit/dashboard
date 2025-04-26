import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #006400, #f0e130)", // Dark green to vibrant yellow
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff", // White text for contrast
        textAlign: "center",
        px: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
          [theme.breakpoints.down("md")]: {
            fontSize: 26,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: 22,
          },
        }}
        gutterBottom
      >
        Welcome to the
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
          fontWeight: "bold",
          [theme.breakpoints.down("md")]: {
            fontSize: 26,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: 22,
          },
        }}
        gutterBottom
      >
        User Dashboard Panel
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
          opacity: 0.9,
          [theme.breakpoints.down("md")]: {
            fontSize: 22,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: 18,
          },
        }}
        gutterBottom
      >
        Have a Good Day!
      </Typography>
    </Box>
  );
}
