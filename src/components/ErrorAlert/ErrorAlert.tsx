import React from 'react';
import { TErrorAlertProps } from './errorAlert.types';

const styles = {
  main: 'alert alert-danger alert-dismissible fade show position-absolute top-0 start-50',
};

export default function ErrorAlert(props: TErrorAlertProps) {
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
