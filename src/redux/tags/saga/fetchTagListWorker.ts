import * as R from 'ramda'
import { Action } from 'redux-actions'
import { all, call, put } from 'redux-saga/effects'

import { questionsActionCreators } from '@redux/questions'
import { getTags } from '@services/api'

import { FetchTagListPayload, tagsActionCreators } from '..'

export function* fetchTagListWorker(action: Action<FetchTagListPayload>) {
  try {
    const response = yield call(getTags, action.payload)
    const tagList = response.data.items
    let actions = [put(tagsActionCreators.fetchTagListSuccess(tagList))]
    if (tagList.length > 0) {
      actions = R.append(
        put(questionsActionCreators.fetchQuestionList(1, 20, tagList[0].name)),
        actions
      )
    } else {
      actions = R.append(
        put(questionsActionCreators.clearQuestionList()),
        actions
      )
    }
    yield all(actions)
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
