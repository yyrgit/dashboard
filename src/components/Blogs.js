import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Card,
  CardContent,
  Grid,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

const blogData = [
  {
    title: "Digital Logic Lab Experience",
    content: `
      The Digital Logic Lab was one of the most exciting and hands-on experiences in my college journey. 
      We worked on designing and implementing logic gates, flip-flops, and combinational circuits. 
      The best part was using software like Logisim to simulate circuits before testing them on actual hardware.
      
      A major challenge was debugging circuits when they didn't work as expected. Sometimes, a small wiring 
      mistake could affect the entire output. But through troubleshooting and teamwork, we learned to analyze 
      and correct errors efficiently.
      
      This lab gave me a solid foundation in digital electronics, which is essential for understanding 
      how modern computing devices work.
    `,
  },
  {
    title: "iOS Development Lab Experience",
    content: `
      The iOS Development Lab introduced us to app development using Swift and Xcode. 
      Learning to build user-friendly iPhone applications from scratch was an amazing experience.

      One of the first tasks was creating a simple calculator app, which helped us understand UI design, 
      Swift programming basics, and event handling. Later, we developed more advanced apps integrating APIs, 
      animations, and Core Data for storage.

      A key takeaway from this lab was learning Apple's design principles and how to optimize apps for 
      performance and smooth user experience. This hands-on experience sparked my interest in mobile 
      app development.
    `,
  },
  {
    title: "Application Development Lab Experience",
    content: `
      In the Application Development Lab, we explored full-stack development by building web and 
      mobile applications. We used React for the frontend and Node.js for the backend, along with 
      databases like MongoDB.

      One of the most interesting projects was developing a **Task Manager App** where users could 
      add, update, and delete tasks. Implementing authentication and securing APIs was challenging 
      but rewarding.

      This lab provided real-world exposure to software development, and I gained a deep understanding 
      of how frontend and backend interact. It was a crucial step in improving my coding skills and 
      preparing for industry-level projects.
    `,
  },
];

export default function Blogs() {
  const [searchText, setSearchText] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const theme = useTheme();

  const searchData = (text) => {
    if (text !== "") {
      const filtered = blogData.filter((blog) =>
        blog.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogData);
    }
  };

  const handleOpen = (blog) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBlog(null);
  };

  return (
    <Box
      sx={{
        mt: 10,
        ml: 28, // Adjusted for sidebar
        mr: 5,
        [theme.breakpoints.down("md")]: {
          ml: 20,
        },
        [theme.breakpoints.down("sm")]: {
          ml: 16,
          mr: 2,
        },
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        My Lab Experiences
      </Typography>

      {/* Search Bar */}
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          mb: 3,
          [theme.breakpoints.down("md")]: {
            width: 300,
          },
          [theme.breakpoints.down("sm")]: {
            width: 200,
          },
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Labs..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            searchData(e.target.value);
          }}
        />
        <IconButton type="button" sx={{ p: "10px" }}>
          <SearchIcon />
        </IconButton>
      </Paper>

      {/* Blog Cards */}
      {filteredBlogs.length === 0 ? (
        <Typography variant="body1" sx={{ textAlign: "center", pt: 3 }}>
          No blogs found for "{searchText}"
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredBlogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.02)" },
                }}
                onClick={() => handleOpen(blog)}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, color: "gray", height: "50px", overflow: "hidden" }}
                  >
                    {blog.content.substring(0, 100)}...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Blog Popup (Modal) */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              outline: "none",
              [theme.breakpoints.down("sm")]: {
                width: "90%",
              },
            }}
          >
            {selectedBlog && (
              <>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {selectedBlog.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "gray", lineHeight: 1.5 }}>
                  {selectedBlog.content}
                </Typography>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
