/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';
import { useAuth } from './useAuth';

/**
 * Custom hook for fetching and managing tasks for a selected project.
 * Handles filtering tasks based on project type (regular, collated, or date-based).
 * Automatically updates when the selected project changes.
 *
 * @param {string} selectedProject - The currently selected project ID or collated task key
 * @returns {Object} Object containing tasks and archivedTasks arrays
 * @returns {Array<Object>} tasks - Array of active (non-archived) tasks
 * @returns {Array<Object>} archivedTasks - Array of archived tasks
 *
 * @example
 * const { tasks, archivedTasks } = useTasks('proj123');
 *
 * @example
 * // For collated tasks
 * const { tasks } = useTasks('TODAY');
 */
export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', user.uid);

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
          ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
              task =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
          : newTasks.filter(task => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter(task => task.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedProject, user]);

  return { tasks, archivedTasks };
};

/**
 * Custom hook for fetching and managing user projects.
 * Retrieves all projects belonging to the current user from Firestore.
 * Automatically updates when projects change.
 *
 * @returns {Object} Object containing projects array and setProjects function
 * @returns {Array<Object>} projects - Array of user's projects
 * @returns {Function} setProjects - Function to update projects state
 *
 * @example
 * const { projects, setProjects } = useProjects();
 */
export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', user.uid)
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id,
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects, user]);

  return { projects, setProjects };
};

export { useAuth };
