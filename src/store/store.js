import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import { fetchImagesSaga } from './fetchImagesSaga';

const sagaMiddleware = createSagaMiddleware();

const getStore = () => {
  const store = createStore(
    reducer, // No need for combining reducers here, too few cases
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(fetchImagesSaga);
  return store;
};

export const store = getStore();
