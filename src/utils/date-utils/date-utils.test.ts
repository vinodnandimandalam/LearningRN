// test case scenarios
// test case of accepting a date and returning the date in the format of YYYY-MM-DD
// test case of invalid date format and return null

import { formatDate } from './date-utils';

describe('formatDate', () => {
  it('should return the date in the format of YYYY-MM-DD', () => {
    const date = '2025-11-11';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('2025-11-11');
  });

  it('should return null for invalid date format', () => {
    const date = 'random date';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBeNull();
  });
});
