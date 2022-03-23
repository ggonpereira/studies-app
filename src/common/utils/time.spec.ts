import { timeToSeconds } from './time';

describe('time utils functions', () => {
  it('should convert "01:30:40" into "5440" seconds', () => {
    expect(timeToSeconds('01:30:40')).toBe(5440);
  });

  it('should convert "00:00:20" into "20" seconds', () => {
    expect(timeToSeconds('00:00:20')).toBe(20);
  });

  it('should convert "01:00" into "3600" seconds', () => {
    expect(timeToSeconds('01:00')).toBe(3600);
  });
});
