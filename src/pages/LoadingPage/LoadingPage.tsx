import React from 'react';
import Loading from '../../components/Loading/Loading';

const styles = {
  container: 'loading-page',
  headline: 'h1',
  spinner: 'loading-page__spinner',
};

export default function LoadingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Loading</h1>
      <div className={styles.spinner}>
        <Loading color="blue" />
      </div>
    </div>
  );
}
