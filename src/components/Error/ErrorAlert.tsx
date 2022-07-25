import React from 'react';
import { TErrorProps } from './errorAlert.types';

const styles = {
  main: 'alert alert-danger alert-dismissible fade show',
};

export default function ErrorAlert(props: TErrorProps) {
  const { message } = props;
  return (
    <p className={styles.main}>
      <strong>Error! </strong>
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
      />
    </p>
  );
}
