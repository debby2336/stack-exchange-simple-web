import { all, takeLatest } from 'redux-saga/effects'

import { fetchQuestionListWorker } from './fetchQuestionListWorker'
import { QuestionsActionTypes } from '..'

export function* questionsSaga() {
  try {
    yield all([
      takeLatest(
        QuestionsActionTypes.FETCH_QUESTION_LIST,
        fetchQuestionListWorker
      )
    ])
  } catch (e) {
    console.log(e)
  }
}
