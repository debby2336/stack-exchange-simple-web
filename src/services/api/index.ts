import axios from 'axios'

import * as types from './types'

const SITE = 'stackoverflow'

const apiInstance = axios.create({
  baseURL: 'https://api.stackexchange.com/2.2',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 60000,
  validateStatus: () => true
})

export const getTags = (payload: types.GetTagsRequest) =>
  apiInstance.get('/tags', {
    params: {
      ...payload,
      order: 'desc',
      sort: 'popular',
      site: SITE
    }
  })

export const getQuestions = (payload: types.GetQuestionsRequest) =>
  apiInstance.get('/questions', {
    params: {
      ...payload,
      order: 'desc',
      sort: 'activity',
      site: SITE
    }
  })
