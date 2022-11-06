import Box from '@mui/material/Box';
import {
  TextField,
  MenuItem
} from '@mui/material';
import { useAtom } from 'jotai';
import { cityCodeAtom, cityListAtom } from '../atoms';


function SelectCity() {
  /*
  ** 都道府県リスト
  */
  const [cityList] = useAtom(cityListAtom)

  /*
  ** 選択中の都道府県コード
  */
  const [cityCode, setCityCode] = useAtom(cityCodeAtom)

  /*
  ** 選択時の処理
  */
  const handleChange = (event) => {
    setCityCode(event.target.value);
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
        label="市区町村を選択"
        value={cityCode}
        onChange={handleChange}
        variant="standard"
      >
        {cityList.map((option) => (
          <MenuItem key={option.cityCode} value={option.cityCode}>
            {option.cityName}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default SelectCity;
