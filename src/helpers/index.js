import { collatedTasks } from '../constants';

/**
 * Finds a project by its projectId from the projects array.
 *
 * @param {Array<Object>} projects - Array of project objects
 * @param {string} projectId - The projectId to search for
 * @returns {Object|undefined} The project object if found, undefined otherwise
 *
 * @example
 * const project = getTitle(projects, 'proj123');
 */
export const getTitle = (projects, projectId) =>
  projects.find(project => project.projectId === projectId);

/**
 * Finds a collated task (like Inbox, Today, Next 7) by its key.
 *
 * @param {Array<Object>} projects - Array of collated task objects
 * @param {string} key - The key to search for (e.g., 'INBOX', 'TODAY', 'NEXT_7')
 * @returns {Object|undefined} The collated task object if found, undefined otherwise
 *
 * @example
 * const collated = getCollatedTitle(collatedTasks, 'TODAY');
 */
export const getCollatedTitle = (projects, key) =>
  projects.find(project => project.key === key);

/**
 * Checks if a selected project is a collated task (Inbox, Today, Next 7).
 *
 * @param {string} selectedProject - The project key to check
 * @returns {Object|undefined} The collated task if found, undefined otherwise
 *
 * @example
 * if (collatedTasksExist('TODAY')) {
 *   // Handle collated task
 * }
 */
export const collatedTasksExist = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject);

/**
 * Generates a unique push ID similar to Firebase's push ID format.
 * Uses timestamp and random characters to create a sortable unique identifier.
 *
 * @returns {Function} A function that generates unique IDs
 *
 * @example
 * const id = generatePushId();
 * // Returns something like: '-KXY12Z_abcDEF'
 */
export const generatePushId = (() => {
  const PUSH_CHARS =
    '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

  const lastRandChars = [];

  return function() {
    let now = new Date().getTime();

    const timeStampChars = new Array(8);
    for (var i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }

    let id = timeStampChars.join('');

    for (i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
  };
})();
