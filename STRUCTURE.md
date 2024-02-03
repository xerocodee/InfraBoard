# InfraBoard File Structure

This document provides an overview of the InfraBoard project's file structure to help you navigate and understand where different parts of the code reside.

## Overview

- `public/`: Contains static assets like images and `favicon.ico` used across the application.
- `src/`: The source code directory for the application.
  - `app/`: Core app files including global styles and layout definitions.
  - `assets/`: Asset files categorized by their types (AWS, GCP, logos, etc.).
  - `components/`: Reusable React components.
    - `canvas/`: Components related to the canvas functionality.
    - `drag/`: Drag-and-drop related components.
    - `header/`: Header component of the application.
    - `modals/`: Contains various modal components like `ReadmeModal.tsx`.
    - `sidebar/`: Sidebar and related components.
  - `store/`: State management using Redux or similar state stores, separated by service types.
- `.eslintrc.json`: ESLint configuration for coding standards.
- `.gitignore`: Specifies files to be ignored by git.
- `.prettierrc`: Prettier configuration for code formatting.
- `next-env.d.ts`: Type declarations for Next.js.
- `next.config.mjs`: Configuration file for Next.js.
- `README.md`: Comprehensive guide and overview of the project.

## Details

Each subdirectory contains further organization specific to its purpose. For instance:

- `store/aws/`: Contains state management files specific to AWS services.
- `store/gcp/`: Contains state management files specific to GCP services.

Remember, this structure may evolve as the project grows. Always pull the latest changes and consult the documentation for the most up-to-date information.
