import React from 'react';
import { TLoadingProps } from './loading.types';

const mainStyles = 'h-100 w-100 spinner-border';
const styles = {
  blue: `${mainStyles} text-primary`,
  gray: `${mainStyles} text-secondary`,
  green: `${mainStyles} text-success`,
  red: `${mainStyles} text-danger`,
  yellow: `${mainStyles} text-warning`,
  turquoise: `${mainStyles} text-info`,
  black: `${mainStyles} text-info`,
};

export default function Loading(props: TLoadingProps) {
  const { color } = props;
  const spinnerClassName = styles[color];
  const hiddenSpanClassName = 'visually-hidden';
  return (
    <div className={spinnerClassName}>
      <span className={hiddenSpanClassName}>Loading...</span>
    </div>
  );
}
