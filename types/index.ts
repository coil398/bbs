export interface Threads {
  threads: Thread[]
}

export interface Thread {
  id: string
  title: string
  createdAt: number
  updatedAt: number
  responses: Response[]
}

export interface Response {
  name: string
  content: string
  createdAt: number
}