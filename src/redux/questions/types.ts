import { Action } from 'redux-actions'

export interface QuestionsState {
  questionList: any;
  isFetching: boolean;
}

export enum QuestionsActionTypes {
  FETCH_QUESTION_LIST = 'QUESTIONS/FETCH_QUESTION_LIST',
  FETCH_QUESTION_LIST_FAIL = 'QUESTIONS/FETCH_QUESTION_LIST_FAIL',
  FETCH_QUESTION_LIST_SUCCESS = 'QUESTIONS/FETCH_QUESTION_LIST_SUCCESS',
}

export interface GetQuestionListPayload {

}

export interface GetQuestionListFailPayload {

}

export interface GetQuestionListSuccessPayload {

}

export type QuestionsPayloads =
  | GetQuestionListPayload
  | GetQuestionListFailPayload
  | GetQuestionListSuccessPayload

export type QuestionsActions = Action<QuestionsPayloads>
