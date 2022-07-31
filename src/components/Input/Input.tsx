import React, { KeyboardEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  bingo, updateTextAfterType, updateTypedText, wrong,
} from '../../store/slices/data/dataSlice';
import { TRootState } from '../../store/Store';
import Cursor from '../Cursor/Cursor';
import Text from '../Text/Text';

const styles = {
  main: 'input position-relative border border-secondary rounded',
};

export default function Input() {
  const dispatch = useDispatch();
  const text = useSelector((state: TRootState) => state.data.text);
  const [nextChar, setNextChar] = useState(text.slice(0, 1));
  useEffect(() => { setNextChar(text.slice(0, 1)); }, [text]);
  const handlerInputKeydown = async (event: KeyboardEvent) => {
    event.stopPropagation();
    const { key } = event;
    const isKeySpace = key === 'space';
    const isCorrect = key === nextChar.toLowerCase() || (isKeySpace && nextChar === ' ');
    if (isCorrect) {
      await dispatch(updateTextAfterType());
      await dispatch(updateTypedText(nextChar));
      await dispatch(bingo());
    } else {
      await dispatch(wrong());
    }
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
