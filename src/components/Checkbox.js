import React from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';

/**
 * Checkbox component for marking tasks as complete.
 * When clicked, archives the task in Firestore.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.id - The unique identifier of the task
 * @param {string} props.taskDesc - The description/title of the task
 * @returns {React.ReactElement} A clickable checkbox element
 *
 * @example
 * <Checkbox id="task123" taskDesc="Buy groceries" />
 */
export const Checkbox = ({ id, taskDesc }) => {
  const archiveTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
      onKeyDown={(e) => {
        if (e.key === 'Enter') archiveTask();
      }}
      aria-label={`Mark ${taskDesc} as done?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  taskDesc: PropTypes.string.isRequired,
};
