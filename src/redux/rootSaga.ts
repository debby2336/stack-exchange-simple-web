import { all, fork } from 'redux-saga/effects'

import { questionsSaga } from './questions/saga'
import { tagsSaga } from './tags/saga'

const combineSagas = (sagas: any) =>
  function* rootSaga() {
    try {
      yield all(sagas.map(fork))
    } catch (err) {
      console.log(err)
    }
  }

export const rootSaga = combineSagas([questionsSaga, tagsSaga])
