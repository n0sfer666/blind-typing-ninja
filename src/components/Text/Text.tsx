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
  return (
    <div className={`${styles.main} ${styles.modifiers[type]}`}>
      {data}
    </div>
  );
}