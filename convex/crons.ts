import { cronJobs } from "convex/server";
import { api } from "./_generated/api";

const crons = cronJobs();

crons.daily(
  "delete expired snippets",
  { hourUTC: 0, minuteUTC: 0 },
  api.snippets.deleteExpiredSnippets
);

export default crons;


