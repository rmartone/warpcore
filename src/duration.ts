const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

type Duration = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  ms: number;
};

/**
 * Convert a duration object to milliseconds
 * @param {Partial<Duration>} duration - A duration object specifying the time units.
 * @returns {number} The total duration in milliseconds.
 */
export function duration({ days = 0, hours = 0, minutes = 0, seconds = 0, ms = 0 }: Partial<Duration>): number {
  return ms + seconds * SECOND + minutes * MINUTE + hours * HOUR + days * DAY;
}
