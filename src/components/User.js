import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function User() {
  const [editMode, setEditMode] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    gender: "",
    enrolmentNo: "",
    course: "",
    mobileNo: "",
    profilePic: "",
  });

  useEffect(() => {
    const storedData = {
      name: localStorage.getItem("nameData") || "No Name",
      email: localStorage.getItem("emailData") || "example@gmail.com",
      address: localStorage.getItem("addressData") || "Unknown",
      gender: localStorage.getItem("genderData") || "Not Specified",
      enrolmentNo: localStorage.getItem("enrolmentNo") || "202303103510111",
      course: localStorage.getItem("course") || "B.Tech CSE",
      mobileNo: localStorage.getItem("mobileNo") || "1234567890",
      profilePic: "/images/profile.png",
    };
    setUserData(storedData);
  }, []);

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("nameData", userData.name);
    localStorage.setItem("addressData", userData.address);
    localStorage.setItem("genderData", userData.gender);
    localStorage.setItem("enrolmentNo", userData.enrolmentNo);
    localStorage.setItem("course", userData.course);
    localStorage.setItem("mobileNo", userData.mobileNo);
    setEditMode(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "60px", // Adjust to prevent touching the header
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -2,
        }}
      />

      {/* Dark Overlay for Better Blending */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark Overlay
          zIndex: -1,
        }}
      />

      <Card
        sx={{
          width: 450,
          p: 3,
          boxShadow: 6,
          bgcolor: "rgba(255, 255, 255, 0.9)", // Light Card Background
          borderRadius: 2,
          maxHeight: "80vh", // Max height for scroll support
          overflowY: "auto", // Enables scrolling when needed
          position: "relative",
        }}
      >
        {/* Edit Button at Top Right */}
        {!editMode && (
          <IconButton
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              bgcolor: "rgba(0, 0, 0, 0.1)",
              "&:hover": { bgcolor: "rgba(0, 0, 0, 0.2)" },
            }}
            onClick={() => setEditMode(true)}
          >
            <EditIcon />
          </IconButton>
        )}

        <Avatar
          src={userData.profilePic}
          alt="Profile"
          sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          {editMode ? (
            <Box sx={{ maxHeight: "60vh", overflowY: "auto", pr: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    sx={{ mb: 1 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={userData.address}
                    onChange={handleChange}
                    sx={{ mb: 1 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Gender"
                    name="gender"
                    value={userData.gender}
                    onChange={handleChange}
                    sx={{ mb: 1 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enrolment No."
                    name="enrolmentNo"
                    value={userData.enrolmentNo}
                    onChange={handleChange}
                    sx={{ mb: 1 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Course"
                    name="course"
                    value={userData.course}
                    onChange={handleChange}
                    sx={{ mb: 1 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mobile No."
                    name="mobileNo"
                    value={userData.mobileNo}
                    onChange={handleChange}
                    sx={{ mb: 1 }}
                  />
                </Grid>
              </Grid>
              <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSave}>
                Save
              </Button>
            </Box>
          ) : (
            <>
              <Grid container spacing={2}>
                {[
                  { label: "Name", value: userData.name },
                  { label: "Email", value: userData.email },
                  { label: "Address", value: userData.address },
                  { label: "Gender", value: userData.gender },
                  { label: "Enrolment No.", value: userData.enrolmentNo },
                  { label: "Course", value: userData.course },
                  { label: "Mobile No.", value: userData.mobileNo },
                ].map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <Paper
                      sx={{
                        p: 1.5,
                        bgcolor: "rgba(240, 240, 240, 0.9)",
                        textAlign: "center",
                        borderRadius: 1,
                        boxShadow: 2,
                      }}
                    >
                      <Typography>
                        <strong>{item.label}:</strong> {item.value}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
