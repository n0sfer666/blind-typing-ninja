import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input/Input';
import Keyboard from '../../components/Keyboard/Keyboard';
import { setLoading, setPreparing } from '../../store/slices/states/statesSlice';
import { TRootState } from '../../store/Store';

const styles = {
  container: 'type-page',
};

export default function TypePage() {
  const dispatch = useDispatch();
  const text = useSelector((state: TRootState) => state.data.text);
  if (!text) {
    dispatch(setLoading(true));
    dispatch(setPreparing(true));
  }

  return (
    <div className={styles.container}>
      <Input />
      <Keyboard />
    </div>
  );
}
