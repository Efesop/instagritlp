import { config } from 'dotenv'
config({ path: '.env.local' })

import './generate-blog-posts'

console.log('Blog post generation cron job started') 