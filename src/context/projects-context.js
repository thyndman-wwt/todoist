import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useProjects } from '../hooks';

/**
 * React Context for managing projects state across the application.
 * @type {React.Context}
 */
export const ProjectsContext = createContext();

/**
 * Provider component for the Projects context.
 * Manages the global state of projects and provides it to child components.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap with the provider
 * @returns {React.ReactElement} The context provider wrapping children
 */
export const ProjectsProvider = ({ children }) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

/**
 * Hook to access the Projects context value.
 * Must be used within a ProjectsProvider.
 *
 * @returns {Object} Object containing projects array and setProjects function
 * @returns {Array} projects - Array of project objects
 * @returns {Function} setProjects - Function to update projects
 */
export const useProjectsValue = () => useContext(ProjectsContext);

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
