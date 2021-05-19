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

export const getHasMoreQuestion = createSelector(
  questionsSelector,
  R.path(['hasMore'])
)

export const getTag = createSelector(questionsSelector, R.path(['tag']))

export const getIsFetchingQuestionLsit = createSelector(
  questionsSelector,
  R.path(['isFetching'])
)
