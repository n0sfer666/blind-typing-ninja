import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input/Input';
import Keyboard from '../../components/Keyboard/Keyboard';
import { setAccuracy, setCharPerMin } from '../../store/slices/data/dataSlice';
import { setLoading, setPreparing } from '../../store/slices/states/statesSlice';
import { TRootState } from '../../store/Store';

const styles = {
  container: 'type-page',
  score: 'type-page__score',
  states: {
    wrong: 'type-page_state_wrong',
  },
};
const timeStart = new Date();

export default function TypePage() {
  const [containerClass, setContainerClass] = useState(styles.container);
  const [lastWrongScore, setLastWrongScore] = useState(0);
  const dispatch = useDispatch();
  const text = useSelector((state: TRootState) => state.data.text);
  const score = useSelector((state: TRootState) => state.data.score);
  const blinkBG = () => {

  };
  if (!text) {
    dispatch(setLoading(true));
    dispatch(setPreparing(true));
  }
  useEffect(() => {
    const timeLeft = Math.round(Math.abs((new Date().getTime() - timeStart.getTime()) / 1000));
    dispatch(setCharPerMin(Math.round((score.bingo / timeLeft) * 60)));
    if (score.wrong) {
      const typesAmount = score.bingo + score.wrong;
      const accuracy = Math.round((score.bingo * 100) / typesAmount);
      dispatch(setAccuracy(accuracy));
      if (score.wrong > lastWrongScore) {
        setLastWrongScore(score.wrong);
        setContainerClass(`${styles.container} + ${styles.states.wrong}`);
        setTimeout(() => {
          setContainerClass(styles.container);
        }, 500);
      }
    }
  });

  return (
    <div className={containerClass}>
      <div className={styles.score}>
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
          Accuracy:
          {' '}
          <strong>{`${score.accuracy}%`}</strong>
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
