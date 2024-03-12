module.exports = {
  apps: [
    {
      name: "GridFinance",
      port: 3000,
      exec_mode: "cluster",
      instances: 1,
      args: "start",
      script: "./.output/server/index.mjs",
    },
  ],
};
