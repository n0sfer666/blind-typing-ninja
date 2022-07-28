import React from 'react';
import Cursor from '../Cursor/Cursor';
import Text from '../Text/Text';

const styles = {
  main: 'input position-relative border border-secondary rounded',
};

export default function Input() {
  return (
    <div className={styles.main}>
      <Text type="typed" />
      <Cursor />
      <Text type="text" />
    </div>
  );
}
