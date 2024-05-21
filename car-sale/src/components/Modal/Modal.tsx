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
import { addCategory } from '../../constants/crudPath';

interface BasicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BasicModal: React.FC<BasicModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: '',
    urlSlug: '',
    imgPath: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(addCategory, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Success:', result);
    } else {
      console.error('Error:', response.statusText);
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
        <Typography>Add Category here {'->'}</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input-title">Title</InputLabel>
          <Input id="title" aria-describedby="my-helper-title" />
          <FormHelperText id="my-helper-title">'Cookie'</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input-priority">Priority</InputLabel>
          <Input id="priority" aria-describedby="my-helper-priority" />
          <FormHelperText id="my-helper-priority">'priority'</FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input-urlSlug">UrlSlug</InputLabel>
          <Input id="urlSlug" aria-describedby="my-helper-urlSlug" />
          <FormHelperText id="my-helper-urlSlug">'urlSlug'</FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-imgPath">Image Path</InputLabel>
          <Input id="imgPath" aria-describedby="my-helper-imgPath" />
          <FormHelperText id="my-helper-imgPath">'Image'</FormHelperText>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
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
