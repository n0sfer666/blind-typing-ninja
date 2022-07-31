import React, { useState } from 'react';
import { TKeyButtonProps } from './keyButton.types';

const styles = {
  container: 'key-button btn',
  themes: {
    specialKey: 'btn-outline-secondary',
    thumb: 'btn-outline-primary',
    leftHand: {
      index: 'btn-primary',
      middle: 'btn-success',
      ring: 'btn-warning',
      pinky: 'btn-info',
    }as Record<string, string>,
    rightHand: {
      index: 'btn-danger',
      middle: 'btn-dark',
      ring: 'btn-light',
      pinky: 'btn-secondary',
    }as Record<string, string>,
  },
};

export const fingerIndexes = {
  thumb: [53],
  leftHand: {
    pinky: [
      1,
      15,
      29,
      42,
    ],
    ring: [
      2,
      16,
      30,
      43,
    ],
    middle: [
      3,
      17,
      31,
      44,
    ],
    index: [
      4, 5,
      18, 19,
      32, 33,
      45, 46,
    ],
  } as Record<string, Array<number>>,
  rightHand: {
    pinky: [
      10, 11, 12,
      24, 25, 26,
      38, 39,
      51,
    ],
    ring: [
      9,
      23,
      37,
      50,
    ],
    middle: [
      8,
      22,
      36,
      49,
    ],
    index: [
      6, 7,
      20, 21,
      34, 35,
      47, 48,
    ],
  } as Record<string, Array<number>>,
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
  const [hand, setHand] = useState('');
  const [modifier, setModifier] = useState('specialKey');
  const keyIndex = keyboardLayouts[layout].indexOf(keyButton);
  if (modifier === 'specialKey') {
    const {
      thumb, leftHand, rightHand,
    } = fingerIndexes;
    if (thumb.indexOf(keyIndex) > -1) setModifier('thumb');
    else {
      Object.keys(leftHand).forEach((key) => {
        if (leftHand[key].indexOf(keyIndex) > -1) {
          setModifier(key);
          setHand('left');
        }
        if (rightHand[key].indexOf(keyIndex) > -1) {
          setModifier(key);
          setHand('right');
        }
      });
    }
  }
  const classModifier = ((): string => {
    if (!hand) {
      return styles.themes.specialKey;
    }
    if (hand === 'left') {
      return styles.themes.leftHand[modifier];
    }

    return styles.themes.rightHand[modifier];
  })();
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
        <div className={`${styles.container} ${classModifier}`}>
          {keyButton}
        </div>
      )
  );
}
