import { Action } from 'redux-actions'
import { call, put, select } from 'redux-saga/effects'

import { getQuestions } from '@services/api'

import { FetchQuestionListPayload, getTag, questionsActionCreators } from '..'

export function* fetchQuestionListWorker(
  action: Action<FetchQuestionListPayload>
) {
  try {
    const tag = yield select(getTag)
    const response = yield call(getQuestions, {
      ...action.payload,
      tagged: tag
    })

    const questionList = response.data.items
    const hasMore = response.data.has_more
    yield put(
      questionsActionCreators.fetchQuestionListSuccess(hasMore, questionList)
    )
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
