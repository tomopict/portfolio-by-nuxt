export type Post = {
  id: number
  title: string
  description: string
}

export type PostLists = {
  body: string
  coediting: boolean
  comments_count: number
  created_at: string
  group: null | string
  id: number
  likes_count: number
  page_views_count: null | string
  private: boolean
  reactions_count: number
  rendered_body: string
  tags: any
  title: string
  updated_at: string
  url: string
  user: any
}
