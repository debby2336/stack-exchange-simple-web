import * as R from 'ramda'
import { createSelector } from 'reselect'

export const questionsSelector = (state) => state.questions

export const getQuestionList = createSelector(
  questionsSelector,
  R.path(['questionList'])
)

export const getQuestionPageCount = createSelector(
  questionsSelector,
  R.path(['page'])
)
