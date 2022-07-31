import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input/Input';
import Keyboard from '../../components/Keyboard/Keyboard';
import { setCharPerMin } from '../../store/slices/data/dataSlice';
import { setLoading, setPreparing } from '../../store/slices/states/statesSlice';
import { TRootState } from '../../store/Store';

const styles = {
  container: 'type-page',
};
const timeStart = new Date();

export default function TypePage() {
  const dispatch = useDispatch();
  const text = useSelector((state: TRootState) => state.data.text);
  const score = useSelector((state: TRootState) => state.data.score);
  if (!text) {
    dispatch(setLoading(true));
    dispatch(setPreparing(true));
  }
  useEffect(() => {
    const timeLeft = Math.round(Math.abs((new Date().getTime() - timeStart.getTime()) / 1000));
    dispatch(setCharPerMin(Math.round((score.bingo / timeLeft) * 60)));
  });

  return (
    <div className={styles.container}>
      <div className="type-page__score">
        <h3>Score:</h3>
        <p>
          Bingo:
          {' '}
          <strong>{score.bingo}</strong>
          {' '}
          Wrong:
          {' '}
          <strong>{score.wrong}</strong>
        </p>
        <p>
          correct characters per minute:
          {' '}
          <strong>{score.charsPerMin}</strong>
        </p>
      </div>
      <Input />
      <Keyboard />
    </div>
  );
}
