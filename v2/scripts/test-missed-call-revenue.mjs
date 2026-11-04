import assert from 'node:assert/strict';
import { estimateMissedRevenue } from '../src/lib/missed-call-revenue.mjs';
const sample = { dailyCalls: '2', days: '22', jobValue: '250', conversion: '50' };
assert.deepEqual(estimateMissedRevenue(sample), { calls: 44, jobs: 22, revenue: 5500 });
assert.equal(estimateMissedRevenue({ ...sample, conversion: '0' }).revenue, 0);
assert.equal(estimateMissedRevenue({ ...sample, dailyCalls: '0' }).revenue, 0);
assert.equal(estimateMissedRevenue({ ...sample, conversion: '100' }).revenue, 11000);
assert.deepEqual(estimateMissedRevenue({ dailyCalls: '1.5', days: '20', jobValue: '200.25', conversion: '25' }), { calls: 30, jobs: 7.5, revenue: 1501.88 });
for (const [field, value] of [['dailyCalls', ''], ['days', '0'], ['days', '32'], ['days', '2.5'], ['jobValue', '-1'], ['conversion', '101'], ['conversion', '-5'], ['dailyCalls', 'Infinity'], ['jobValue', 'abc'], ['dailyCalls', '1001']]) {
  assert.equal(estimateMissedRevenue({ ...sample, [field]: value }), null, field + '=' + value);
}
console.log('PASS missed-call calculation: defaults, zero, conversion, rounding and invalid inputs');
