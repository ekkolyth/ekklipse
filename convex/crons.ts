import { cronJobs } from 'convex/server'
import { api } from './_generated/api'

const crons = cronJobs()

crons.daily(
    'delete expired klips',
    { hourUTC: 0, minuteUTC: 0 },
    api.klips.deleteExpiredKlips
)

export default crons
