import { Reducer, handleActions } from 'redux-actions'

import { storeOptions } from './actions'
import {
  FetchTagListFailPayload,
  FetchTagListPayload,
  FetchTagListSuccessPayload,
  TagsActionTypes,
  TagsPayloads,
  TagsState
} from './types'

export const INITIAL_STATE: TagsState = {
  tagList: [],
  isFetching: false
}

export const fetchTags: Reducer<TagsState, FetchTagListPayload> = (state) => ({
  ...state,
  isFetching: true
})

export const fetchTagsFail: Reducer<TagsState, FetchTagListFailPayload> = (
  state,
  { payload }
) => ({
  ...state,
  isFetching: false
})

export const fetchTagsSuccess: Reducer<TagsState, FetchTagListSuccessPayload> =
  (state, { payload }) => ({
    ...state,
    tagList: payload.items,
    isFetching: false
  })

export const tagsReducer = handleActions<TagsState, TagsPayloads>(
  {
    [TagsActionTypes.FETCH_TAG_LIST]: fetchTags,
    [TagsActionTypes.FETCH_TAG_LIST_FAIL]: fetchTagsFail,
    [TagsActionTypes.FETCH_TAG_LIST_SUCCESS]: fetchTagsSuccess
  },
  INITIAL_STATE,
  storeOptions
)
