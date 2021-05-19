export interface GetTagsRequest {
  page: number
  pagesize: number
  order: 'asc' | 'desc'
  sort: string
  site: string
}

export interface GetQuestionsRequest {
  page: number
  pagesize: number
  order: 'asc' | 'desc'
  sort: string
  site: string
  tagged: string
}
