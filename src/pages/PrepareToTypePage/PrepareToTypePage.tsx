import React from 'react';
import { useDispatch } from 'react-redux';
import { setPreparing } from '../../store/slices/states/statesSlice';

const styles = {
  container: 'prepare-to-type-page',
  button: 'btn btn-info prepare-to-type-page__button prepare-to-type-page__button_animation_pulse',
};

export default function PrepareToTypePage() {
  const dispatch = useDispatch();
  const handleButtonClick = () => dispatch(setPreparing(false));
  return (
    <div className={styles.container}>
      <h3>prepare</h3>
      <h2>to</h2>
      <h1>TYPE!</h1>
      <button type="button" className={styles.button} onClick={handleButtonClick} autoFocus>
        Press any key
      </button>
    </div>
  );
}
