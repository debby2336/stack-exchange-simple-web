import { QuestionItemType } from 'src/types/questions'
import { TagItem } from 'src/types/tags'

export interface GetTagsRequest {
  page: number
  pagesize: number
  order: 'asc' | 'desc'
  sort: 'popular'
}

export interface GetQuestionsRequest {
  page: number
  pagesize: number
  tagged: string
}
