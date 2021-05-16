import axios from 'axios'

import * as types from './types'

const apiInstance = axios.create({
  baseURL: 'https://api.stackexchange.com/2.2',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 60000,
  validateStatus: () => true
})

export const getTag = (payload: types.GetTagsRequest) =>
  apiInstance.get('/tags', {
    params: {
      sort: "popular",
      site: "stackoverflow"
    }
  })

export const getTrendingTag = () =>
  apiInstance.get('/tags', {
    params: {
      sort: "popular",
      site: "stackoverflow"
    }
  })

export const fetchQuestions = (payload: types.FetchQuestionsRequest) =>
  apiInstance.get('/questions')