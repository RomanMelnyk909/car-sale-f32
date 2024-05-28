import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

interface ProductsModalProps {
  open: boolean;
  onClose: () => void;
  onAddProduct: (
    name: string,
    priority: string,
    price: string,
    description: string,
  ) => void;
}

const ProductsModal: React.FC<ProductsModalProps> = ({
  open,
  onClose,
  onAddProduct,
}) => {
  const [newProductData, setNewProductData] = useState({
    name: "",
    priority: "",
    price: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    onAddProduct(
      newProductData.name,
      newProductData.priority,
      newProductData.price,
      newProductData.description
    );
    onClose();

    setNewProductData({ name: "", priority: "", price: "", description: "", });
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
          Add New Product
        </Typography>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newProductData.name}
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
          name="priority"
          label="Priority"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newProductData.priority}
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
          name="price"
          label="Price"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newProductData.price}
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
          name="description"
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newProductData.description}
          onChange={handleInputChange}
          sx={{
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#E24648",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              { borderColor: "#E24648" },
          }}
        />
        <Button variant="contained" onClick={handleAddProduct} sx={{ mt: 2 }}>
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default ProductsModal;
