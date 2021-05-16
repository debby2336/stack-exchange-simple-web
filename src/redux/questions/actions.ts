import { createActions } from 'redux-actions'

import { QuestionsActionTypes, QuestionsPayloads } from './types'

export const storeOptions = {
  prefix: 'QUESTIONS'
}

export const questionsActionCreators = createActions<QuestionsPayloads>(
  {
    [QuestionsActionTypes.FETCH_QUESTION_LIST]: () => ({
    }),
  },
  storeOptions
)
