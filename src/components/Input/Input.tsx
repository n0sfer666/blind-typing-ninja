import React, { KeyboardEvent } from 'react';
import Cursor from '../Cursor/Cursor';
import Text from '../Text/Text';

const styles = {
  main: 'input position-relative border border-secondary rounded',
};

export default function Input() {
  const handlerInputKeydown = (event: KeyboardEvent) => {
    const { key } = event;
    console.log(key);
  };
  return (
    <div className={styles.main}>
      <Text type="typed" />
      <Cursor />
      <Text type="text" />
      <input className="input__typing-area" onKeyDown={handlerInputKeydown} autoFocus />
    </div>
  );
}
