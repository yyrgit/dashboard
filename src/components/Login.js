// Login.js (Updated)
import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import CollapseItem from "./CollapseItem";

const theme = createTheme();

export default function Login() {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (email === "23amtics111@gmail.com" && password === "12345") {
      localStorage.setItem("emailData", email);
      localStorage.setItem("passwordData", password);

      // Do NOT overwrite existing profile info
      if (!localStorage.getItem("nameData")) {
        localStorage.setItem("nameData", "Yesha Jain");
      }
      if (!localStorage.getItem("addressData")) {
        localStorage.setItem("addressData", "123 Main St");
      }
      if (!localStorage.getItem("genderData")) {
        localStorage.setItem("genderData", "Female");
      }
      if (!localStorage.getItem("profilePic")) {
        localStorage.setItem("profilePic", "https://via.placeholder.com/150");
      }

      navigate("/");
    } else {
      setErr("Please Enter Correct Email or Password");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #004d00, #a0c450)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "10rem",
            fontWeight: "bold",
            color: "rgba(255, 255, 255, 0.1)",
            letterSpacing: "10px",
            userSelect: "none",
          }}
        >
          AMTICS
        </Typography>

        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              backgroundColor: "#002d00",
              padding: 4,
              borderRadius: 4,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#f0e130" }}>
              <LockOutlinedIcon sx={{ color: "#004d00" }} />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "#f0e130" }}>
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  input: { color: "#ffffff" },
                  label: { color: "rgba(255, 255, 255, 0.7)" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#f0e130" },
                    "&:hover fieldset": { borderColor: "#ffff80" },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  input: { color: "#ffffff" },
                  label: { color: "rgba(255, 255, 255, 0.7)" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#f0e130" },
                    "&:hover fieldset": { borderColor: "#ffff80" },
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#f0e130",
                  color: "#004d00",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#ffff80",
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
            {err && <CollapseItem err={err} />}
          </Box>
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "rgba(255, 255, 255, 0.7)", mt: 4 }}
          >
            <span style={{ color: "#ffffff", fontWeight: "bold" }}>
              BY - Yesha (202303103510111)
            </span>
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
