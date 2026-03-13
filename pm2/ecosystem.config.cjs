const path = require("path");

const root = path.resolve(__dirname, "..");

const runAgent = (name, cron) => ({
  name,
  cwd: root,
  script: "/bin/bash",
  args: ["-lc", `${path.join(root, "scripts/run-agent.sh")} ${name}`],
  autorestart: false,
  cron_restart: cron,
  time: true,
  out_file: path.join(root, "runtime/logs", `${name.replace(/\//g, "_")}.out.log`),
  error_file: path.join(root, "runtime/logs", `${name.replace(/\//g, "_")}.err.log`),
  merge_logs: true,
  env: {
    AGENT_COMPANY_ROOT: root,
    AGENT_NAME: name,
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  },
});

module.exports = {
  apps: [
    runAgent("board/chair", "0 */4 * * *"), // every 4 hours for strategic direction
    runAgent("board/strategy-member", "15 */4 * * *"), // every 4 hours, 15 min after chair
    runAgent("executive/ceo", "5,20,35,50 * * * *"), // every 15 minutes to coordinate execution
    runAgent("departments/sales/manager", "2,17,32,47 * * * *"), // every 15 minutes, offset from CEO
    runAgent("departments/sales/outbound-1", "*/10 * * * *"), // every 10 minutes for aggressive outreach
    runAgent("departments/marketing/manager", "7,22,37,52 * * * *"), // every 15 minutes for marketing ops
    runAgent("departments/marketing/content", "0,30 * * * *"), // every 30 minutes for content waves
    runAgent("departments/operations/manager", "12,27,42,57 * * * *"), // every 15 minutes for ops review
    runAgent("departments/research/market-intel", "0 * * * *"), // every hour for market intel
    runAgent("departments/finance/manager", "0 */2 * * *"), // every 2 hours for financial review
  ],
};
