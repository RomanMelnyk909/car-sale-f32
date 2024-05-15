import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

interface BlogModalProps {
  open: boolean;
  onClose: () => void;
  onAddPost: (name: string, text: string) => void;
}

const SingleBlogModal: React.FC<BlogModalProps> = ({
  open,
  onClose,
  onAddPost,
}) => {
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
          width: 700,
          borderRadius: "5px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Edit Blog
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
          multiline
          rows={5}
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
        <Box display="flex" justifyContent="right">
          <Button variant="contained" onClick={handleAddPost} sx={{ mt: 2 }}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SingleBlogModal;
