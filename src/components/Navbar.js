import { React, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    if (!getEmail && !getPassword) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [getEmail, getPassword]);

  const handleClick = () => {
    setIsLoggedIn(false);

    // ✅ Only clear login data
    localStorage.removeItem("emailData");
    localStorage.removeItem("passwordData");

    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: "linear-gradient(135deg, #004d00, #ffcc00)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side - Logo / Title */}
        <Toolbar sx={{ ml: -3 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                [theme.breakpoints.down("md")]: {
                  fontSize: 18,
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: 16,
                },
              }}
            >
              Dashboard Panel
            </Typography>
          </Link>
        </Toolbar>

        {/* Right Side - Profile & Logout/Login */}
        <Box
          sx={{
            mr: -3,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: 1,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {isLoggedIn && (
            <Link to="/user">
              <IconButton title="Profile">
                <AccountCircleIcon
                  sx={{
                    color: "#fff",
                    fontSize: 40,
                    "&:hover": {
                      color: "#ffd700",
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: 30,
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: 25,
                    },
                  }}
                />
              </IconButton>
            </Link>
          )}

          {isLoggedIn ? (
            <Button
              onClick={handleClick}
              sx={{
                color: "black",
                bgcolor: "#ffd700",
                "&:hover": {
                  bgcolor: "#ffcc00",
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: 10,
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: 6,
                },
              }}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button
                sx={{
                  color: "black",
                  bgcolor: "#ffd700",
                  "&:hover": {
                    bgcolor: "#ffcc00",
                  },
                }}
              >
                Login
              </Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
