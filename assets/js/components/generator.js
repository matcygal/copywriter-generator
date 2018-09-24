import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import GeneratorForm from "./generatorForm";

class generator extends Component {

  render() {
    return (
      <Paper className='container__base' square={true} elevation={24}>
        <h1 className="heading">Copywriting Generator</h1>
        <Grid container justify='center' spacing={8} >
          <Grid item style={{}} xs={12} md={8}>
            <GeneratorForm />
          </Grid>
          <Grid item style={{}} xs={12} md={4}>
            <p className='typewriter__font font--justify font--indent'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend nisl id sapien sollicitudin feugiat. Nam nulla nisi, sagittis ac cursus vitae, euismod sed diam. Etiam dapibus dui non mi posuere finibus. Ut orci velit, ultrices vel tincidunt vitae, fringilla cursus lectus. Fusce sit amet leo leo. Etiam justo arcu, lobortis in erat sed, mollis tristique tellus. Nulla fermentum fermentum justo, eget aliquet nibh. Fusce blandit tellus turpis, id elementum erat scelerisque vitae. Etiam accumsan urna sit amet ipsum faucibus rutrum ut sed sem. Maecenas mattis eget dui in varius. Morbi tristique risus ac velit rhoncus, quis tempor sapien dictum.
            </p>
            <p className='typewriter__font font--justify font--indent'>
              Curabitur viverra tristique neque vel ultrices. Sed euismod venenatis eros a pretium. Integer id mauris eu erat maximus tempus. Nullam convallis, est feugiat vestibulum finibus, tellus tellus tempor erat, id pretium urna eros vitae turpis. Suspendisse laoreet sagittis urna, nec accumsan ipsum maximus non. Ut tristique lorem vitae dolor tempus ultrices. Sed facilisis cursus ullamcorper. Nunc porttitor blandit lacus a pellentesque. Morbi vulputate neque sit amet ante vulputate, nec dictum ipsum volutpat. Integer sollicitudin congue dui quis volutpat. Nullam vitae feugiat ipsum, ac sagittis ligula. In id ultrices risus. Cras ac laoreet mi. Quisque eleifend feugiat arcu, at maximus velit hendrerit quis. Vestibulum a felis non ex ornare pharetra. Sed porta ultricies rhoncus.
            </p>
          </Grid>
        </Grid>
      </Paper >
    );
  }
}

export default generator;