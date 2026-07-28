import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * React Context for managing the currently selected project.
 * @type {React.Context}
 */
export const SelectedProjectContext = createContext();

/**
 * Provider component for the SelectedProject context.
 * Manages which project is currently selected in the application.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap with the provider
 * @returns {React.ReactElement} The context provider wrapping children
 */
export const SelectedProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState('INBOX');

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

/**
 * Hook to access the SelectedProject context value.
 * Must be used within a SelectedProjectProvider.
 *
 * @returns {Object} Object containing selectedProject and setSelectedProject
 * @returns {string} selectedProject - The currently selected project ID
 * @returns {Function} setSelectedProject - Function to update the selected project
 */
export const useSelectedProjectValue = () => useContext(SelectedProjectContext);

SelectedProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
