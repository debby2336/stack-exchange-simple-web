import { Action } from 'redux-actions'

import { QuestionItemType } from 'src/types/questions'

export interface QuestionsState {
  page: number
  tag: string
  questionList: any
  isFetching: boolean
  hasMore: boolean
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
  tag?: string
}

export interface FetchQuestionListFailPayload {
  error: any
}

export interface FetchQuestionListSuccessPayload {
  hasMore: boolean
  items: QuestionItemType[]
}

export type QuestionsPayloads =
  | FetchQuestionListPayload
  | FetchQuestionListFailPayload
  | FetchQuestionListSuccessPayload

export type QuestionsActions = Action<QuestionsPayloads>
