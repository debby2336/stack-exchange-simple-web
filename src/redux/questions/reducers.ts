import { Reducer, handleActions } from 'redux-actions'

import { storeOptions } from './actions'
import {
  GetQuestionListPayload,
  GetQuestionListFailPayload,
  GetQuestionListSuccessPayload,
  QuestionsActionTypes,
  QuestionsPayloads,
  QuestionsState,
} from './types'

export const INITIAL_STATE: QuestionsState = {
  questionList: [],
  isFetching: false
}

export const fetchQuestions: Reducer<
  QuestionsState,
  GetQuestionListPayload
> = (state) => ({
  ...state,
  isFetching: true,
})

export const fetchQuestionsFail: Reducer<
  QuestionsState,
  GetQuestionListFailPayload
> = (state, { payload }) => ({
  ...state,
  isFetching: false,
})

export const fetchQuestionsSuccess: Reducer<
  QuestionsState,
  GetQuestionListSuccessPayload
> = (state, { payload }) => ({
  ...state,
  isFetching: false,
})

export const questionsReducer = handleActions<
  QuestionsState,
  QuestionsPayloads
>(
  {
    [QuestionsActionTypes.FETCH_QUESTION_LIST]: fetchQuestions,
    [QuestionsActionTypes.FETCH_QUESTION_LIST_FAIL]: fetchQuestionsFail,
    [QuestionsActionTypes.FETCH_QUESTION_LIST_SUCCESS]: fetchQuestionsSuccess
  },
  INITIAL_STATE,
  storeOptions
)
