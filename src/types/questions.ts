export interface OwnerType {
  reputation: number
  user_id: number
  user_type: string
  profile_image: string
  display_name: string
  link: string
}

export interface QuestionItemType {
  tags: String[]
  owner: OwnerType
  answer_count: number
  is_answered: boolean
  view_count: number
  score: number
  last_activity_date: number
  creation_date: number
  question_id: number
  content_license: string
  link: string
  title: string
}
