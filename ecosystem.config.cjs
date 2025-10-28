module.exports = {
  apps: [
    {
      name: "fakturera",
      script: "./server.js",
      autorestart: true,
      watch: false,
      ignore_watch: ["node_modules", ".git"],
      exp_backoff_restart_delay: 100,
      mode: "fork",
    },
  ],
};
3;
