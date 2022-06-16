import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from "prop-types";

export default function SelectAutoWidth({data}) {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Categories"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data.map((d) => {
            return <MenuItem key={d.id} value={d.id}>{d.name}</MenuItem>
          })}
        </Select> 
      </FormControl>
    </div>
  );
}

SelectAutoWidth.propTypes = {
  data : PropTypes.array
}