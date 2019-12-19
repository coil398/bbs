export interface Thread {
  id: string
  title: string
  created_at: number
  updated_at: number
  responses: Response[]
}

export interface Response {
  name: string
  content: string
  createdAt: number
}