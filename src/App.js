import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';

/**
 * Main application component that serves as the root of the Todoist clone.
 * Manages dark mode state and provides context providers for projects and selected project.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} [props.darkModeDefault=false] - Initial state for dark mode
 * @returns {React.ReactElement} The main application component with providers and layout
 *
 * @example
 * // Basic usage
 * <App />
 *
 * @example
 * // With dark mode enabled by default
 * <App darkModeDefault={true} />
 */
export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
          className={darkMode ? 'darkmode' : undefined}
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

App.propTypes = {
  darkModeDefault: PropTypes.bool,
};
