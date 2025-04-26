import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TbPointFilled } from "react-icons/tb";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function About() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 10,
        ml: 30, // Keeping proper left spacing for sidebar
        mr: 5,
        [theme.breakpoints.down("md")]: {
          ml: 22,
        },
        [theme.breakpoints.down("sm")]: {
          ml: 18,
        },
      }}
    >
      <Typography variant="h5" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        I am Yesha Yadav, studying in the 4th semester at AMTICS, Uka Tarsadia University, Bardoli. My experience with this college has been truly enriching. The campus provides an excellent learning environment with top-notch faculty and facilities. I have gained practical exposure through various technical workshops and hands-on projects.
      </Typography>
      
      <Typography variant="h6" sx={{ mt: 3 }}>
        My Passion
      </Typography>
      <Typography variant="body1" gutterBottom>
        I have a deep passion for Computer Science and Engineering, particularly in technical subjects and hands-on practical work. I enjoy web development and constantly explore new technologies to enhance my skills.
      </Typography>
      
      <Typography variant="h6" sx={{ mt: 3 }}>
        Campus Details
      </Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {[
          { title: "120", subtitle: "Acres of Green Campus" },
          { title: "22", subtitle: "Institutes & Departments" },
          { title: "80+", subtitle: "Programs Offered" },
          { title: "650+", subtitle: "Staff Members" },
          { title: "10,000+", subtitle: "Student Population" },
          { title: "103", subtitle: "MoUs Signed" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: "center", borderRadius: 2 }}>
              <Typography variant="h5" color="primary">
                {item.title}
              </Typography>
              <Typography variant="body2">{item.subtitle}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      <Typography variant="h6" sx={{ mt: 3 }}>
        Amenities
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our campus offers a wide range of facilities, including hostel accommodations, a well-equipped library, multiple auditoriums, a sports ground, a modern gym, canteens, and restaurants to cater to students' needs.
      </Typography>
    </Box>
  );
}
