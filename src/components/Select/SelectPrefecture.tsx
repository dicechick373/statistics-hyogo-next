import Box from '@mui/material/Box';
import {
  TextField,
  MenuItem
} from '@mui/material';
import { useAtom } from 'jotai';
import { prefCodeAtom, prefListAtom } from '@/components/atoms';

function SelectPrefecture() {
  /*
  ** 都道府県リスト
  */
  const [prefList] = useAtom(prefListAtom)

  /*
  ** 選択中の都道府県コード
  */
  const [prefCode, setPrefCode] = useAtom(prefCodeAtom)

  /*
  ** 選択時の処理
  */
  const handleChange = (event) => {
    setPrefCode(event.target.value);
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
        value={prefCode}
        onChange={handleChange}
        variant="standard"
      >
        {prefList.map((option) => (
          <MenuItem key={option.prefCode} value={option.prefCode}>
            {option.prefName}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default SelectPrefecture;
