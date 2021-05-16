import { createWrapper, Context } from 'next-redux-wrapper';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import logger from 'redux-logger'
import createSagaMiddleware, { Task } from 'redux-saga'

import { ApplicationState, hydrateReducer } from '.'
import { rootSaga } from './rootSaga'

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const getStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    hydrateReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, logger)
    )
  ) as SagaStore

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper<Store<ApplicationState>>(getStore, { debug: true });