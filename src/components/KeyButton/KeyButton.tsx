import React, { useState } from 'react';
import { TKeyButtonProps } from './keyButton.types';

const styles = {
  container: 'key-button btn',
  themes: {
    specialKey: 'btn-outline-secondary',
    thumb: 'btn-secondary',
    index: 'btn-primary',
    middle: 'btn-success',
    ring: 'btn-warning',
    pinky: 'btn-info',
  } as Record<string, string>,
};

export const fingerIndexes: Record<string, Array<number>> = {
  thumb: [53],
  pinky: [
    1, 10, 11, 12,
    15, 24, 25, 26,
    29, 38, 39,
    42, 51,
  ],
  ring: [
    2, 9,
    16, 23,
    30, 37,
    43, 50,
  ],
  middle: [
    3, 8,
    17, 22,
    31, 36,
    44, 49,
  ],
  index: [
    4, 5, 6, 7,
    18, 19, 20, 21,
    32, 33, 34, 35,
    45, 46, 47, 48,
  ],
};

export const keyboardLayouts: Record<string, Array<string>> = {
  en: [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\u{232b} Back',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '\\',
    'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '\'', '\u{23ce}',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
    ' ',
  ],
  ru: [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\u{232b} Back',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
    'Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\u{23ce}',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift',
    ' ',
  ],
};

export default function KeyButton(props: TKeyButtonProps) {
  const { keyButton, layout = 'en' } = props;
  const [modifier, setModifier] = useState('specialKey');
  const keyIndex = keyboardLayouts[layout].indexOf(keyButton);
  if (modifier === 'specialKey') {
    const {
      thumb, pinky, ring, middle, index,
    } = fingerIndexes;
    if (thumb.indexOf(keyIndex) > -1) setModifier('thumb');
    else if (pinky.indexOf(keyIndex) > -1) setModifier('pinky');
    else if (ring.indexOf(keyIndex) > -1) setModifier('ring');
    else if (middle.indexOf(keyIndex) > -1) setModifier('middle');
    else if (index.indexOf(keyIndex) > -1) setModifier('index');
  }
  return (
    modifier === 'thumb'
      ? (
        <div className="d-flex justify-content-around w-100">
          <div className={`${styles.container} ${styles.themes[modifier]}`}>
            {keyButton}
          </div>
        </div>
      )
      : (
        <div className={`${styles.container} ${styles.themes[modifier]}`}>
          {keyButton}
        </div>
      )
  );
}
