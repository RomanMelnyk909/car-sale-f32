import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

interface BlogModalProps {
  open: boolean;
  onClose: () => void;
  onEditBlog: (name: string, text: string) => void;
  initialData: { name: string; text: string };
}

const SingleBlogModal: React.FC<BlogModalProps> = ({
  open,
  onClose,
  onEditBlog,
  initialData,
}) => {
  const [editBlogData, setEditBlogData] = useState({
    name: initialData.name || "",
    text: initialData.text || "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditBlogData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditBlog = () => {
    onEditBlog(editBlogData.name, editBlogData.text);
    onClose();

    setEditBlogData({ name: "", text: "" });
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
          value={editBlogData.name}
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
          value={editBlogData.text}
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
          <Button variant="contained" onClick={handleEditBlog} sx={{ mt: 2 }}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SingleBlogModal;
