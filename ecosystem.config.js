module.exports = {
  apps: [{
    name: 'blog-generator',
    script: 'scripts/start-cron.ts',
    interpreter: 'ts-node',
    watch: false,
    env: {
      NODE_ENV: 'production'
    }
  }]
} 