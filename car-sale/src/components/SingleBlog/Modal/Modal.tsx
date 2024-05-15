import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, "Name length must be greater than one character.")
    .required("Name is required"),
  text: yup
    .string()
    .min(1, "Text length must be greater than one character.")
    .required("Text is required"),
});

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
  const initialValues = {
    name: initialData.name || "",
    text: initialData.text || "",
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            onEditBlog(values.name, values.text);
            onClose();
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                error={<ErrorMessage name="name" />}
                helperText={<ErrorMessage name="name" />}
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#E24648",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    { borderColor: "#E24648" },
                }}
              />
              <Field
                as={TextField}
                name="text"
                label="Text"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={5}
                error={<ErrorMessage name="text" />}
                helperText={<ErrorMessage name="text" />}
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#E24648",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    { borderColor: "#E24648" },
                }}
              />
              <Box display="flex" justifyContent="right">
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  sx={{ mt: 2 }}
                >
                  Save
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default SingleBlogModal;
