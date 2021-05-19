import { Action } from 'redux-actions'

import { TagItemType } from 'src/types/tags'

export interface TagsState {
  tagList: any
  isFetching: boolean
}

export enum TagsActionTypes {
  FETCH_TAG_LIST = 'TAGS/FETCH_TAG_LIST',
  FETCH_TAG_LIST_FAIL = 'TAGS/FETCH_TAG_LIST_FAIL',
  FETCH_TAG_LIST_SUCCESS = 'TAGS/FETCH_TAG_LIST_SUCCESS'
}

export interface FetchTagListPayload {
  page: number
  pagesize: number
  inname?: string
}

export interface FetchTagListFailPayload {
  error: any
}

export interface FetchTagListSuccessPayload {
  items: TagItemType[]
}

export type TagsPayloads =
  | FetchTagListPayload
  | FetchTagListFailPayload
  | FetchTagListSuccessPayload

export type TagsActions = Action<TagsPayloads>
