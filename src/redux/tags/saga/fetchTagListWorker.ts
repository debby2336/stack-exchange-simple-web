import { Action } from 'redux-actions'
import { all, call, put } from 'redux-saga/effects'

import { getTags } from '@services/api'

import { questionsActionCreators } from '@redux/questions'

import { FetchTagListPayload, tagsActionCreators } from '..'

export function* fetchTagListWorker(action: Action<FetchTagListPayload>) {
  try {
    const response = yield call(getTags, action.payload)

    const tagList = response.data.items
    yield put(tagsActionCreators.fetchTagListSuccess(tagList))
  } catch (err) {
    let payload
    if (err.status >= 500 && err.status <= 599) {
      payload = {
        errorCode: err.data.code,
        status: err.status
      }
    } else {
      payload = {
        errorCode: 'NETWORK_ERROR',
        name: err.name,
        message: err.message,
        code: err.code
      }
    }
    yield put(tagsActionCreators.fetchTagListFail(payload))
  }
}
