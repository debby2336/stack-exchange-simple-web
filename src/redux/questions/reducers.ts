import * as R from 'ramda'
import { Reducer, handleActions } from 'redux-actions'

import { storeOptions } from './actions'
import {
  FetchQuestionListFailPayload,
  FetchQuestionListPayload,
  FetchQuestionListSuccessPayload,
  QuestionsActionTypes,
  QuestionsPayloads,
  QuestionsState
} from './types'

export const INITIAL_STATE: QuestionsState = {
  page: 0,
  tag: '',
  questionList: [],
  isFetching: false,
  hasMore: false
}

export const fetchQuestionList: Reducer<
  QuestionsState,
  FetchQuestionListPayload
> = (state, { payload }) => {
  let _state = { ...state, page: payload.page, isFetching: true }
  if (payload.tag) {
    _state = {
      ..._state,
      tag: payload.tag,
      questionList: []
    }
  }
  return _state
}

export const fetchQuestionListFail: Reducer<
  QuestionsState,
  FetchQuestionListFailPayload
> = (state, { payload }) => ({
  ...state,
  isFetching: false
})

export const fetchQuestionListSuccess: Reducer<
  QuestionsState,
  FetchQuestionListSuccessPayload
> = (state, { payload }) => ({
  ...state,
  hasMore: payload.hasMore,
  questionList: R.concat(payload.items, state.questionList),
  isFetching: false
})

export const clearQuestionList: Reducer<QuestionsState> = (state) => ({
  ...state,
  questionList: []
})

export const questionsReducer = handleActions<
  QuestionsState,
  QuestionsPayloads
>(
  {
    [QuestionsActionTypes.FETCH_QUESTION_LIST]: fetchQuestionList,
    [QuestionsActionTypes.FETCH_QUESTION_LIST_FAIL]: fetchQuestionListFail,
    [QuestionsActionTypes.FETCH_QUESTION_LIST_SUCCESS]:
      fetchQuestionListSuccess,
    [QuestionsActionTypes.CLEAR_QUESTION_LIST]: clearQuestionList
  },
  INITIAL_STATE,
  storeOptions
)
