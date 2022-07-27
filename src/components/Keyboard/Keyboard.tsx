import React from 'react';
import KeyButton, { keyboardLayouts } from '../KeyButton/KeyButton';
import { TKeyboardProps } from './keyboard.types';

const styles = {
  container: 'keyboard',
  row: 'd-flex flex-nowrap justify-content-between',
};

export default function Keyboard(props: TKeyboardProps) {
  const { layout = 'en' } = props;
  const keyboardLayout = keyboardLayouts[layout];
  const rows = [
    keyboardLayout.slice(0, 14),
    keyboardLayout.slice(14, 28),
    keyboardLayout.slice(28, 41),
    keyboardLayout.slice(41, 53),
    keyboardLayout.slice(53),
  ];
  return (
    <div className={styles.container}>
      {
        rows.map((row, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={styles.row} key={`keyboard-row-${index}`}>
            {
              row.map((keyButton, i) => (
                <KeyButton
                  keyButton={keyButton}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`key-button-${i}`}
                  layout={layout}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
}
