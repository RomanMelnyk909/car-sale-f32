import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addCategory } from '../../constants/crudPath';

interface BasicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  priority: Yup.number().required('Priority is required'),
  urlSlug: Yup.string().required('UrlSlug is required'),
  image: Yup.string().required('Image Path is required'),
});

const BasicModal: React.FC<BasicModalProps> = ({ isOpen, onClose }) => {
  const initialValues = {
    title: '',
    priority: '',
    urlSlug: '',
    image: '',
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch(addCategory, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        let result;
        const text = await response.text();
        try {
          result = text ? JSON.parse(text) : {};
        } catch (error) {
          console.error('Error parsing JSON:', error);
          result = {};
        }
        console.log('Success:', result);
        // Optionally close the modal and reset the form on success
        resetForm();
        onClose();
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Category
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <FormControl
                fullWidth
                margin="normal"
                error={touched.title && !!errors.title}
              >
                <InputLabel htmlFor="title">Title</InputLabel>
                <Field
                  as={Input}
                  id="title"
                  name="title"
                  aria-describedby="my-helper-title"
                />
                <FormHelperText id="my-helper-title">
                  <ErrorMessage name="title" component="span" />
                </FormHelperText>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
                error={touched.priority && !!errors.priority}
              >
                <InputLabel htmlFor="priority">Priority</InputLabel>
                <Field
                  as={Input}
                  id="priority"
                  name="priority"
                  type="number"
                  aria-describedby="my-helper-priority"
                />
                <FormHelperText id="my-helper-priority">
                  <ErrorMessage name="priority" component="span" />
                </FormHelperText>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
                error={touched.urlSlug && !!errors.urlSlug}
              >
                <InputLabel htmlFor="urlSlug">UrlSlug</InputLabel>
                <Field
                  as={Input}
                  id="urlSlug"
                  name="urlSlug"
                  aria-describedby="my-helper-urlSlug"
                />
                <FormHelperText id="my-helper-urlSlug">
                  <ErrorMessage name="urlSlug" component="span" />
                </FormHelperText>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
                error={touched.image && !!errors.image}
              >
                <InputLabel htmlFor="imgPath">Image Path</InputLabel>
                <Field
                  as={Input}
                  id="image"
                  name="image"
                  aria-describedby="my-helper-image"
                />
                <FormHelperText id="my-helper-image">
                  <ErrorMessage name="image" component="span" />
                </FormHelperText>
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                fullWidth
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default BasicModal;
