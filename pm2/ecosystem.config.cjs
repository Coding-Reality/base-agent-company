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
    runAgent("board/chair", "15 6,18 * * *"), // run at 6:15am and 6:15pm, twice daily to review direction
    runAgent("board/strategy-member", "25 6,18 * * *"), // run at 6:25am and 6:25pm, after chair to review strategy
    runAgent("executive/ceo", "5,35 * * * *"), // run every 30 minutes at :05 and :35 to coordinate execution
    runAgent("departments/sales/manager", "10,40 * * * *"), // run every 30 minutes at :10 and :40 after CEO
    runAgent("departments/sales/outbound-1", "*/15 * * * *"), // run every 15 minutes for aggressive outreach
    runAgent("departments/marketing/manager", "0,30 * * * *"), // run every 30 minutes at :00 and :30
    runAgent("departments/marketing/content", "15 * * * *"), // run every hour at :15 for content waves
    runAgent("departments/operations/manager", "20,50 * * * *"), // run every 30 minutes at :20 and :50 for ops review
    runAgent("departments/research/market-intel", "0 */2 * * *"), // run every 2 hours for market intel
    runAgent("departments/finance/manager", "0 */6 * * *"), // run every 6 hours for financial review
  ],
};
