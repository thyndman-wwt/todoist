/**
 * Context module that exports all context providers and hooks.
 * Provides centralized access to global state management.
 *
 * @module context
 */

import {
  ProjectsContext,
  ProjectsProvider,
  useProjectsValue,
} from './projects-context';

import {
  SelectedProjectContext,
  SelectedProjectProvider,
  useSelectedProjectValue,
} from './selected-project-context';

export {
  ProjectsContext,
  ProjectsProvider,
  useProjectsValue,
  SelectedProjectContext,
  SelectedProjectProvider,
  useSelectedProjectValue,
};
