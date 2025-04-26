import React, { useState, useEffect } from "react";
import { Box, Button, Typography, IconButton, Grid, Card, CardMedia, CardActions } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PictureGallery() {
  const [images, setImages] = useState([]);

  // Load stored images from localStorage on mount
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("userImages")) || [];
    setImages(storedImages);
  }, []);

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images, reader.result];
        setImages(newImages);
        localStorage.setItem("userImages", JSON.stringify(newImages));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Image Deletion
  const handleDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    localStorage.setItem("userImages", JSON.stringify(updatedImages));
  };

  return (
    <Box sx={{ mt: 10, ml: 10, mr: 10 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", textAlign: "center", color: "#1565C0" }}>
        📸 Picture Gallery
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Button variant="contained" component="label" color="primary" sx={{ fontSize: 16, padding: "10px 20px" }}>
          Upload Image
          <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
        </Button>
      </Box>

      {/* Display Uploaded Images */}
      {images.length > 0 ? (
        <Grid container spacing={3} justifyContent="center">
          {images.map((img, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
                <CardMedia component="img" height="200" image={img} alt={`Uploaded ${index}`} sx={{ borderRadius: 2 }} />
                <CardActions sx={{ justifyContent: "center" }}>
                  <IconButton color="error" onClick={() => handleDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" sx={{ mt: 3, textAlign: "center", color: "#757575" }}>
          No images uploaded yet. Start by adding some!
        </Typography>
      )}
    </Box>
  );
}
