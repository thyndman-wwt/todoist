import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

/**
 * Content layout component that displays the main content area.
 * Contains the sidebar for navigation and the tasks display area.
 *
 * @component
 * @returns {React.ReactElement} The content section with sidebar and tasks
 */
export const Content = () => (
  <section className="content">
    <Sidebar />
    <Tasks />
  </section>
);
