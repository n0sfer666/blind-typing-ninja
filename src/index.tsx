import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import ErrorAlert from './components/ErrorAlert/ErrorAlert';
import PrepareToTypePage from './pages/PrepareToTypePage/PrepareToTypePage';
import TypePage from './pages/TypePage/TypePage';
import Router from './router/Router';
import { setError, setText } from './store/slices/data/dataSlice';
import { setLoading } from './store/slices/states/statesSlice';
import store, { TRootState } from './store/Store';

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach(r);
}
importAll(require.context('./', true, /\.scss$/));

const baconApiUrl = 'https://baconipsum.com/api/?type=meat-and-filler&paras=15&format=text';

function BlindTypingNinjaApp() {
  const dispatch = useDispatch();
  const loading = useSelector((state: TRootState) => state.states.loading);
  const preparing = useSelector((state: TRootState) => state.states.preparing);
  const error = useSelector((state: TRootState) => state.data.error);

  if (loading) {
    fetch(baconApiUrl)
      .then((data) => data.text())
      .then((textFromAPI) => dispatch(setText(textFromAPI)))
      .catch((errorResponse: Error) => dispatch(setError(errorResponse.message)))
      .finally(() => dispatch(setLoading(false)));
  }

  return (
    <main className="container-fluid position-relative">
      {
      (error) && (<ErrorAlert message={error} />)
      }
      <Router activePage={preparing ? <PrepareToTypePage /> : <TypePage />} />
    </main>
  );
}
// ! is necessary (https://www.techiediaries.com/react-18-createroot/)
const root = createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <BlindTypingNinjaApp />
  </Provider>,
);
