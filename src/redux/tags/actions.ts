import { createActions } from 'redux-actions'

import { TagItemType } from 'src/types/tags'

import { TagsActionTypes, TagsPayloads } from './types'

export const storeOptions = {
  prefix: 'TAGS'
}

export const tagsActionCreators = createActions<TagsPayloads>(
  {
    [TagsActionTypes.FETCH_TAG_LIST]: (
      page: number,
      pagesize: number,
      inname?: string
    ) => ({
      page,
      pagesize,
      ...(inname && { inname })
    }),
    [TagsActionTypes.FETCH_TAG_LIST_SUCCESS]: (items: TagItemType[]) => ({
      items
    }),
    // TODO
    [TagsActionTypes.FETCH_TAG_LIST_FAIL]: (error: any) => ({
      error
    })
  },
  storeOptions
)
