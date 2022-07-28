import React, { useState } from 'react';

const styles = {
  main: 'cursor bg-primary position-absolute',
  blinking: 'cursor_theme_is-blink',
};

export default function Cursor() {
  return (
    <div className={`${styles.main} ${styles.blinking}`} />
  );
}
