import React, { Component } from 'react';
import { Box, IconButton, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material/";
import ProductsModal from "../ProductsModal";

interface Product {
    name: string;
    priority: string;
    price: string;
    description: string;
}

interface AddNewProductState {
    showModal: boolean;
    products: Product[];
}

class AddNewProduct extends Component<{}, AddNewProductState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            showModal: false,
            products: [],
        };
    }

    componentDidMount() {
          console.log("component did mount");
        }
      
        componentDidUpdate() {
          console.log("component did update");
        }
      
        componentWillUnmount() {
          console.log("component will unmount");
        }
      
        componentDidCatch() {
          console.log("component did catch");
        }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    };

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    addProduct = async (newProduct: Product) => {
        try {
            const response = await fetch("https://roman.itstep.click/api/Products/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error("Failed to add product");
            }

            const addedProduct = await response.json();

            this.setState((prevState) => ({
                products: [...prevState.products, addedProduct],
            }));

            this.handleCloseModal();
        } catch (error) {
            console.log(error);
            
        }
    };

    handleAddProduct = (name: string, priority: string, price: string, description: string) => {
        const newProduct: Product = {
            name,
            priority,
            price,
            description,
        };

        this.addProduct(newProduct);
    };

    render() {
        const { showModal } = this.state;

        return (
            <Box display="flex" justifyContent="center">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="300px"
                    borderRadius={5}
                >
                    <Typography component="p" variant="h6">
                        Add new product
                    </Typography>
                    <IconButton size="large" onClick={this.handleOpenModal}>
                        <AddCircleOutline fontSize="large" sx={{ color: "#282828" }} />
                    </IconButton>
                </Box>
                <ProductsModal
                    open={showModal}
                    onClose={this.handleCloseModal}
                    onAddProduct={this.handleAddProduct}
                />
            </Box>
        );
    }
}

export default AddNewProduct;
