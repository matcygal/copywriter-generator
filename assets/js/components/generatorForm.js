import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';


class generatorForm extends Component {
  render() {
    return (
      <FormControl fullWidth={true} margin='dense' className='typewriter__font--all'>
        <div className="form__field--margin">
          <TextField
            id=""
            fullWidth={true}
            className='block'
            variant="outlined"
            label="Product name"
          />
        </div>
        <div className="form__field--margin">
          <TextField
            select
            fullWidth={true}
            className='block'
            value={10}
            variant="outlined"
            label="Category"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </div>
        <Switch defaultChecked value="checkedF" color="default" />
        <div className="form__field--margin">
          <TextField
            id=""
            fullWidth={true}
            className='block'
            variant="outlined"
            label="item"
          />

        </div>
        <Button className="button__base block" variant='outlined'>Submit</Button>
      </FormControl >
    );
  }
}
export default generatorForm;


