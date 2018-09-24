import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';


class fail extends Component {

  render() {
    return (
      <Paper className='container__base' square={true} elevation={24}>
        <h1 className="heading">You type something wrong!</h1>
        <p className='typewriter__font font--justify font--indent'>
          please start agiain from the begingng
        </p>
      </Paper>
    );
  }
}

export default fail;