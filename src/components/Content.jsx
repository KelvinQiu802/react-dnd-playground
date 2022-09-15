import React from 'react';
import styles from '../styles/Content.module.css';
import Box from './Box';
import Eg1 from './Eg1';
import Eg2 from './Eg2';
import Eg3 from './Eg3';
import Eg4 from './Eg4';

function Content() {
  return (
    <div className={styles.content}>
      <Box title='Single Target'>
        <Eg1 />
      </Box>
      <Box title='Mutiple Target'>
        <Eg2 />
      </Box>
      <Box title='Real Drop'>
        <Eg3 />
      </Box>
      <Box title='Drag Around'>
        <Eg4 />
      </Box>
    </div>
  );
}

export default Content;
