import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";

import Questions from '../Quiz';

export default function SelectAutoWidth({data, setShowHome, setShowQuestions, setCategory, category}) {

  const handleChange = (event) => {
    category = event.target.value;
    setCategory(category);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowHome(false);
    setShowQuestions(true);
  } 

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          // value={selectedCategory}
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

        <Button type='submit'>
        Start
      </Button>
      </FormControl>
      </form>
   
    </div>
  );
}

SelectAutoWidth.propTypes = {
  data : PropTypes.array
}