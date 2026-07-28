import { collatedTasks } from '../constants';

/**
 * Finds a project by its ID from the projects array.
 * @param {Array<Object>} projects - Array of project objects
 * @param {string} projectId - The ID of the project to find
 * @returns {Object|undefined} The project object if found, otherwise undefined
 */
export const getTitle = (projects, projectId) =>
  projects.find(project => project.projectId === projectId);

/**
 * Finds a collated project by its key from the projects array.
 * @param {Array<Object>} projects - Array of project objects
 * @param {string} key - The key of the collated project to find
 * @returns {Object|undefined} The project object if found, otherwise undefined
 */
export const getCollatedTitle = (projects, key) =>
  projects.find(project => project.key === key);

/**
 * Checks if a collated task exists for the given selected project key.
 * @param {string} selectedProject - The key of the selected project
 * @returns {Object|undefined} The collated task object if found, otherwise undefined
 */
export const collatedTasksExist = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject);

/**
 * Generates a unique push ID using a timestamp and random characters.
 * Uses a base-64 encoding scheme with custom character set.
 * @returns {string} A unique 20-character ID
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
