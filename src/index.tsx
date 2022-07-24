import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { update } from './store/slices/text/textSlice';
import store, { TRootState } from './store/Store';

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach(r);
}
importAll(require.context('./styles', true, /\.scss$/));
importAll(require.context('./components', true, /\.scss$/));

const styles = {
  main: 'container container-main',
  sub: 'container container-sub',
  error: 'alert alert-danger alert-dismissible fade show',
};
const baconApiUrl = 'https://baconipsum.com/api/?type=meat-and-filler&paras=15&format=text';

function BlindTypingNinjaApp() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(new Error('').message);
  const dispatch = useDispatch();
  const text = useSelector((state: TRootState) => state.data.text);

  if (loading) {
    fetch(baconApiUrl)
      .then((data) => data.text())
      .then((textFromAPI) => dispatch(update(textFromAPI)))
      .catch((errorResponse: Error) => setError(errorResponse.message))
      .finally(() => setLoading(false));
  }

  return (
    <main className="container">
      <div className={styles.main}>
        Place for input component
      </div>
      <div className={styles.sub}>
        Place for keyboard component
      </div>
      <p>
        {loading ? 'Loading' : text}
      </p>
      {
        (error) && (
          <p className={styles.error}>
            <strong>Error! </strong>
            {error}
            <button type="button" className="btn-close" data-bs-dismiss="alert" />
          </p>
        )
      }
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
