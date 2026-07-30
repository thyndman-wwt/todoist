import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { SignIn } from './components/SignIn';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import { useAuth } from './hooks';

/**
 * Main application component that serves as the root of the Todoist app.
 * Manages dark mode state and provides context providers for projects and selected project.
 * Requires user authentication before displaying the main app.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} [props.darkModeDefault=false] - Initial dark mode state
 * @returns {React.ReactElement} The main application component with providers and layout, or sign-in screen
 */
export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div
        className="app-loading"
        data-testid="app-loading"
        role="status"
        aria-live="polite"
        aria-label="Loading application"
      >
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <SignIn />;
  }

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
          className={darkMode ? 'darkmode' : undefined}
          role="main"
          aria-label="Main application content"
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
