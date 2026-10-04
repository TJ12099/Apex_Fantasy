/** Change this number before each presentation. The site highlights that week. */
export const CURRENT_WEEK = 8;

/** Number of presentations. The 18-week project is spread evenly across them for progress. */
export const TOTAL_WEEKS = 10;

export const PROJECT_NAME = 'APEX Business Solutions';

export function activeWeek() {
  const week = Number(CURRENT_WEEK);
  if (!Number.isFinite(week) || week < 1) return 1;
  if (week > TOTAL_WEEKS) return TOTAL_WEEKS;
  return week;
}
