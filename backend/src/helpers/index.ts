/**
 * Check if the app is running in production
 *
 * @type {boolean}
 */
export const isProduction = process.env.NODE_ENV === 'production';

/**
 * Log to console
 *
 * @template T
 * @param {...T[]} props
 */
export const logger = <T>(...props: T[]): void => {
  if (isProduction) {
    console.log(...props);
  }
};

/**
 * Get error message
 *
 * @param {unknown} error
 * @param {string} [defaultMessage='An unexpected error occurred']
 * @returns {string}
 */
export const getErrorMessage = (
  error: unknown,
  defaultMessage: string = 'An unexpected error occurred',
): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return defaultMessage;
};
