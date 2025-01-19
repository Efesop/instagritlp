export interface BlogPost {
  title: string
  slug: string
  date: string
  modifiedDate?: string
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
  | 'motivation science'
  | 'motivation psychology'
  | 'overcoming demotivation'
  | 'discipline benefits'
  | 'happiness habits'
  | 'motivation research'
  | 'emotional discipline'
  | 'happiness psychology'
  | 'motivation blocks'
  | 'discipline mindset'
  | 'happiness strategies'
  | 'motivation patterns' 