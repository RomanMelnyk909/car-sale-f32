import { useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function CategoryTabs() {
  const [value, setValue] = useState('one');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
          <Tab value="one" label="ALL" />
          <Tab value="two" label="ECU TUNING" />
          <Tab value="three" label="CODING" />
          <Tab value="four" label="ELECTRONICS" />
          <Tab value="five" label="EXTERIORS" />
          <Tab value="six" label="INTERIORS" />
        </Tabs>
      </Box>
    </Box>
  );
}
