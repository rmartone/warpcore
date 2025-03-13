// could add RR GG BB too if ever needed
export type ColorComponents = { color: number; alpha: number };

/**
 * Parses a hex color string, #RRGGBB or #RRGGBBAA, and returns it as an object with color and alpha.
 * Exists to adapt color to a format reuqied by somec Phaser APIs.
 *
 * @param {string} value - The hex color string to parse.
 * @returns {ColorComponents} An object containing the color and alpha values.
 * @throws {Error} If the input string is not a valid hex color.
 */
export function toColorComponents(value: string): ColorComponents {
  const hexColorRegex = /^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

  if (!hexColorRegex.test(value)) {
    throw new Error('Invalid color string');
  }

  const hexColorStr = value.slice(1);

  // Handle both 6-char and 8-char hex codes
  const color = parseInt(hexColorStr.slice(0, 6), 16);
  const alpha = hexColorStr.length === 8 ? parseInt(hexColorStr.slice(6, 8), 16) / 255 : 1.0;

  return { color, alpha };
}
