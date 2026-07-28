import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

/**
 * Main content layout component that displays the sidebar and tasks.
 * Serves as the primary layout container for the application content.
 *
 * @component
 * @returns {React.ReactElement} The content section with sidebar and tasks
 *
 * @example
 * <Content />
 */
export const Content = () => (
  <section className="content">
    <Sidebar />
    <Tasks />
  </section>
);
