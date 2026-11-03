/**
 * @param {{dailyCalls: string, days: string, jobValue: string, conversion: string}} inputs
 */
export function estimateMissedRevenue(inputs) {
  if (Object.values(inputs).some(value => value.trim() === '')) return null;
  const dailyCalls = Number(inputs.dailyCalls);
  const days = Number(inputs.days);
  const jobValue = Number(inputs.jobValue);
  const conversion = Number(inputs.conversion);
  if (![dailyCalls, days, jobValue, conversion].every(Number.isFinite)
    || dailyCalls < 0 || dailyCalls > 1000
    || !Number.isInteger(days) || days < 1 || days > 31
    || jobValue < 1 || jobValue > 100000
    || conversion < 0 || conversion > 100) return null;
  const calls = dailyCalls * days;
  const jobs = calls * conversion / 100;
  return { calls, jobs, revenue: Math.round(jobs * jobValue * 100) / 100 };
}
