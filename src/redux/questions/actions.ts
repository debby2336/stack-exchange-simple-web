import { createActions } from 'redux-actions'

import { QuestionItemType } from 'src/types/questions'

import { QuestionsActionTypes, QuestionsPayloads } from './types'

export const storeOptions = {
  prefix: 'QUESTIONS'
}

export const questionsActionCreators = createActions<QuestionsPayloads>(
  {
    [QuestionsActionTypes.FETCH_QUESTION_LIST]: (
      page: number,
      pagesize: number,
      tag: string
    ) => ({
      page,
      pagesize,
      tag
    }),
    // TODO
    [QuestionsActionTypes.FETCH_QUESTION_LIST_FAIL]: (error: any) => ({
      error
    }),
    [QuestionsActionTypes.FETCH_QUESTION_LIST_SUCCESS]: (
      hasMore: boolean,
      items: QuestionItemType[]
    ) => ({ hasMore, items }),
    [QuestionsActionTypes.CLEAR_QUESTION_LIST]: () => undefined
  },
  storeOptions
)
