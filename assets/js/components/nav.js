import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { NavLink } from 'react-router-dom';


class nav extends Component {

  render() {
    return (
      <AppBar position='static' style={{ backgroundColor: 'transparent', display: 'block', boxShadow: 'none', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '970px', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <NavLink to='/' activeClassName='nav--active'>
              <Button className="button__base" color="inherit" variant="outlined">
                Logo
              </Button>
            </NavLink>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <NavLink to='/app' activeClassName='nav--active'>
              <Button className="button__base" color="inherit" variant="outlined">
                App
              </Button>
            </NavLink>
            <NavLink to='/documentation' activeClassName='nav--active'>
              <Button className="button__base" color="inherit" variant="outlined">
                Documentation
              </Button>
            </NavLink>
            <NavLink to='/about' activeClassName='nav--active'>
              <Button className="button__base" color="inherit" variant="outlined">
                About
              </Button>
            </NavLink>
          </div>
        </div>
      </AppBar>
    );
  }
}

export default nav;

