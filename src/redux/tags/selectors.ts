import * as R from 'ramda'
import { createSelector } from 'reselect'

export const tagsSelector = (state) => state.tags

export const getTagList = createSelector(tagsSelector, R.path(['tagList']))

export const getIsFetchingTagList = createSelector(
  tagsSelector,
  R.path(['isFetching'])
)
