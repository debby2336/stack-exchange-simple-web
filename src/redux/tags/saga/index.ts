import { all, takeLatest } from 'redux-saga/effects'

import { fetchTagListWorker } from './fetchTagListWorker'
import { TagsActionTypes } from '..'

export function* tagsSaga() {
  try {
    yield all([takeLatest(TagsActionTypes.FETCH_TAG_LIST, fetchTagListWorker)])
  } catch (e) {
    console.log(e)
  }
}
