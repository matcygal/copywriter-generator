import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


class welcome extends Component {

  render() {
    return (
      <div className='welcome__container'>
        <TypeWriter className='typewriter__font' fixed={true} typing={1} minDelay={50} maxDelay={100}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium arcu vitae rhoncus fringilla. Suspendisse finibus, nisi ac mattis cursus, leo tortor volutpat nunc, sit amet pharetra odio tellus sed odio. Lorem ipsum dolor sit amet, sit amet finibus ante vulputate.
        </TypeWriter>
        <NavLink to='/app' activeClassName='nav--active'>
          <Button className="button__base welcome__button--margin" variant='outlined'>Get Started</Button>
        </NavLink>
      </div>
    );
  }
}

export default welcome;