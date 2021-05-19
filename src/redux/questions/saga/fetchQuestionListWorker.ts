import { Action } from 'redux-actions'
import { call, put } from 'redux-saga/effects'

import { getQuestions } from '@services/api'

import { FetchQuestionListPayload, questionsActionCreators } from '..'

export function* fetchQuestionListWorker(
  action: Action<FetchQuestionListPayload>
) {
  try {
    const response = yield call(getQuestions, action.payload)

    const questionList = response.data.items
    yield put(questionsActionCreators.fetchQuestionListSuccess(questionList))
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
    yield put(questionsActionCreators.fetchQuestionListFail(payload))
  }
}
