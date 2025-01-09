module.exports = {
    apps: [
      {
        name: 'sunway',
        script: './node_modules/next/dist/bin/next',
        args: 'start',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production'
        }
      }
    ]
  };