import React from 'react';
import { useSelector } from 'react-redux';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import { TRootState } from '../store/Store';
import { TRouterProps } from './router.types';

export default function Router(props: TRouterProps) {
  const { activePage } = props;
  const loading = useSelector((state: TRootState) => state.states.loading);

  return loading
    ? <LoadingPage />
    : activePage;
}
