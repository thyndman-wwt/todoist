import React from 'react';
import PropTypes from 'prop-types';
import { useProjectsValue } from '../context';

/**
 * Overlay component for selecting a project when adding a task.
 * Displays a list of available projects that can be selected.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.setProject - Callback to set the selected project
 * @param {boolean} props.showProjectOverlay - Whether the overlay should be visible
 * @param {Function} props.setShowProjectOverlay - Callback to toggle overlay visibility
 * @returns {React.ReactElement|null} The project overlay or null if not shown
 *
 * @example
 * const [project, setProject] = useState('');
 * const [showOverlay, setShowOverlay] = useState(false);
 * <ProjectOverlay
 *   setProject={setProject}
 *   showProjectOverlay={showOverlay}
 *   setShowProjectOverlay={setShowOverlay}
 * />
 */
export const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
}) => {
  const { projects } = useProjectsValue();

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map((project) => (
            <li key={project.projectId}>
              <div
                data-testid="project-overlay-action"
                onClick={() => {
                  setProject(project.projectId);
                  setShowProjectOverlay(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setProject(project.projectId);
                    setShowProjectOverlay(false);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Select the task project"
              >
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

ProjectOverlay.propTypes = {
  projects: PropTypes.array,
};
