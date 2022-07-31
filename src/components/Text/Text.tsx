import React from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../../store/Store';
import { TTextProps } from './text.types';

const styles = {
  main: 'text text-secondary position-absolute',
  modifiers: {
    text: 'text_type_is-text',
    typed: 'text_type_is-typed opacity-50',
  },
};

export default function Text(props: TTextProps) {
  const { type } = props;
  const data = useSelector((state: TRootState) => state.data[type]);
  const nextChar = data.slice(0, 1);
  return (
    <div className={`${styles.main} ${styles.modifiers[type]}`}>
      {type === 'text'
        ? (
          <>
            <strong style={{ fontSize: '18px' }}>{nextChar === ' ' ? '\u{23B5}' : nextChar}</strong>
            <span>{`${data.slice(1)}`}</span>
          </>
        )
        : data}
    </div>
  );
}
