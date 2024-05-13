import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

interface BlogModalProps {
  open: boolean;
  onClose: () => void;
  onAddPost: (name: string, text: string) => void;
}

const BlogsModal: React.FC<BlogModalProps> = ({ open, onClose, onAddPost }) => {
  const [newBlogData, setNewBlogData] = useState({
    name: "",
    text: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewBlogData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddPost = () => {
    onAddPost(newBlogData.name, newBlogData.text);
    onClose();

    setNewBlogData({ name: "", text: "" });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: 400,
          borderRadius: "5px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add New Blog Post
        </Typography>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newBlogData.name}
          onChange={handleInputChange}
          sx={{
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#E24648",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              { borderColor: "#E24648" },
          }}
        />
        <TextField
          name="text"
          label="Text"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newBlogData.text}
          onChange={handleInputChange}
          sx={{
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#E24648",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              { borderColor: "#E24648" },
          }}
        />
        <Button variant="contained" onClick={handleAddPost} sx={{ mt: 2 }}>
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default BlogsModal;
