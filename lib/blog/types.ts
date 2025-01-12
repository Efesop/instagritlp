export interface BlogPost {
  title: string
  slug: string
  date: string
  excerpt: string
  content: string
  tags: string[]
}

export type Topic = 
  | 'habit formation'
  | 'discipline'
  | 'productivity'
  | 'accountability'
  | 'goal setting'
  | 'motivation'
  | 'time management'
  | 'self-improvement' 