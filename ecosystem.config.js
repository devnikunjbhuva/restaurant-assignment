module.exports = {
  apps: [
    {
      name: "prod",
      script: "dist/server.js",
      autorestart: true,
      watch: false,
      ignore_watch: ["node_modules", "logs"],
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
    {
      name: "dev",
      script: "ts-node",
      args: "-r tsconfig-paths/register --transpile-only src/server.ts",
      autorestart: true,
      watch: false,
      ignore_watch: ["node_modules", "logs"],
      env: {
        PORT: 3000,
        NODE_ENV: "development",
      },
    },
  ],
};
