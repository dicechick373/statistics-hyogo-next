import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import {
  TextField,
  MenuItem
} from '@mui/material';

function SelectPrefecture() {

  const [prefs, setPrefs] = useState([])
  useEffect(() => {
    const fetchPrefs = async () => {
      const response = await fetch('/api/prefs')
      const data = await response.json()
      setPrefs(data)
    }
    fetchPrefs()
  }, [])
  console.log(prefs)


  const [currency, setCurrency] = useState('28');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };



  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-select-currency"
        select
        label="都道府県を選択"
        value={currency}
        onChange={handleChange}
        variant="standard"
      >
        {prefs.map((option) => (
          <MenuItem key={option.prefCode} value={option.prefCode}>
            {option.prefName}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default SelectPrefecture;
