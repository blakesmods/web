module.exports = {
  apps: [
    {
      name: "API",
      // TODO: figure out typescript build issues
      script: "yarn workspace @blakesmods/api start",
      instances: 1,
      env: {
        NODE_ENV: "production",
        DOTENV_CONFIG_PATH: "/var/services/shared/env/api.env"
      }
    }
  ],

  // Deployment Configuration
  deploy: {
    local: {
      user: "root",
      host: "170.187.145.195",
      ref: "origin/main",
      repo: "git@github.com:blakesmods/web.git",
      path: "/var/services",
      "post-deploy": "yarn && pm2 startOrReload ./ecosystem.config.js"
    },
    production: {
      user: "root",
      host: "170.187.145.195",
      key: "~/.ssh/deploy.key",
      ref: "origin/main",
      repo: "git@github.com:blakesmods/web.git",
      path: "/var/services",
      ssh_options: "StrictHostKeyChecking=no",
      "post-deploy": "yarn && pm2 startOrReload ./ecosystem.config.js"
    }
  }
};
