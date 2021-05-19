import { Action } from 'redux-actions'

import { QuestionItemType } from 'src/types/questions'

export interface QuestionsState {
  page: number
  questionList: any
  isFetching: boolean
}

export enum QuestionsActionTypes {
  FETCH_QUESTION_LIST = 'QUESTIONS/FETCH_QUESTION_LIST',
  FETCH_QUESTION_LIST_FAIL = 'QUESTIONS/FETCH_QUESTION_LIST_FAIL',
  FETCH_QUESTION_LIST_SUCCESS = 'QUESTIONS/FETCH_QUESTION_LIST_SUCCESS',
  CLEAR_QUESTION_LIST = 'QUESTIONS/CLEAR_QUESTION_LIST'
}

export interface FetchQuestionListPayload {
  page: number
  pagesize: number
  tagged: string
}

export interface FetchQuestionListFailPayload {
  error: any
}

export interface FetchQuestionListSuccessPayload {
  items: QuestionItemType[]
}

export type QuestionsPayloads =
  | FetchQuestionListPayload
  | FetchQuestionListFailPayload
  | FetchQuestionListSuccessPayload

export type QuestionsActions = Action<QuestionsPayloads>
