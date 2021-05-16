import * as R from 'ramda'
import { createSelector } from 'reselect'

export const questionsSelector = (state) => state.questions

export const getQuestionList = createSelector(
  questionsSelector,
  (_: any, props) => props,
  R.path(['questionList'])
)
