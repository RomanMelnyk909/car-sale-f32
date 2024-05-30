import { useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { toWords } from 'number-to-words';
import BasicModal from '../Modal/Modal';

export default function CategoryTabs({ categoryNames }: { categoryNames: [] }) {
  const [value, setValue] = useState('one');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false)

  return (
    <Box
      sx={{
        width: '100%',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="red"
          aria-label="secondary tabs example"
        >
          {categoryNames ? categoryNames.map((cat, index) => (
            <Tab key={cat?.id} value={toWords(index)} label={cat?.title} />
          )) : ['No Categories']}
        </Tabs>
        <Button color='error' variant="outlined" onClick={openModalHandler} sx={{ml: '40%', mt: 1}}>ADD CATEGORY</Button>
        {showModal && <BasicModal isOpen={showModal} onClose={closeModalHandler} />}
      </Box>
    </Box>
  );
}
