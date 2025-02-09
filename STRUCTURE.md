# 📁 InfraBoard Project Structure

This document provides a comprehensive overview of the InfraBoard project's file structure and architecture.

## 🏗 Application Architecture

```mermaid
graph TD
    A[Client Layer] --> B[Next.js Application]
    B --> C[Service Layer]
    C --> D[External Services]

    subgraph "Client Layer"
        A1[Browser] --> A2[React Components]
        A2 --> A3[State Management]
    end

    subgraph "Next.js Application"
        B1[Pages] --> B2[Components]
        B2 --> B3[Hooks]
        B2 --> B4[Utils]
    end

    subgraph "Service Layer"
        C1[API Routes] --> C2[Authentication]
        C2 --> C3[Data Services]
    end

    subgraph "External Services"
        D1[Appwrite]
        D2[AWS Services]
        D3[GCP Services]
    end
```

## 📂 Directory Structure

```mermaid
graph TD
    Root["/"] --> SRC["src/"]
    Root --> Public["public/"]
    Root --> Scripts["scripts/"]
    Root --> Config["config files"]

    SRC --> App["app/"]
    SRC --> Assets["assets/"]
    SRC --> Components["components/"]
    SRC --> Lib["lib/"]
    SRC --> Types["types/"]
    SRC --> Utils["utils/"]

    App --> Auth["auth/"]
    App --> Layout["layout/"]
    App --> Pages["pages/"]

    Assets --> AWS["aws/"]
    Assets --> GCP["gcp/"]
    Assets --> Logos["logos/"]

    Components --> UI["ui/"]
    Components --> Canvas["canvas/"]
    Components --> Modals["modals/"]
```

## 📁 Core Directories

### `/src`
The main source code directory containing the application logic.

#### `/app`
Next.js 13+ app directory structure:
- `/auth` - Authentication related pages
- `/layout` - Layout components and templates
- `/pages` - Application pages and routes

#### `/assets`
Static assets and icon components:
- `/aws` - AWS service icons and assets
- `/gcp` - GCP service icons and assets
- `/logos` - Brand and service logos

#### `/components`
Reusable React components:
- `/canvas` - Drag-and-drop canvas components
- `/ui` - UI components (buttons, inputs, etc.)
- `/modals` - Modal dialog components

#### `/lib`
Core libraries and utilities:
- `utils.ts` - Utility functions
- `types.ts` - TypeScript type definitions

### `/public`
Static files served directly:
- Images
- Fonts
- Favicon
- robots.txt
- sitemap.xml

### `/scripts`
Build and maintenance scripts:
- `generate-robots.js`
- `generate-sitemap.js`

## 🔧 Configuration Files

- `.env.example` - Environment variables template
- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration
- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 🚀 Key Features Implementation

```mermaid
flowchart TD
    A[User Interface] --> B{Authentication}
    B -->|Success| C[Dashboard]
    B -->|Failure| D[Login Page]
    
    C --> E[Canvas]
    E --> F[Infrastructure Design]
    F --> G[Code Generation]
    
    subgraph "Infrastructure Management"
        F --> H[AWS Services]
        F --> I[GCP Services]
        H --> J[Terraform]
        I --> J
    end
```

## 📦 Component Organization

Components are organized following atomic design principles:

1. **Atoms**: Basic UI components
   - Buttons
   - Inputs
   - Icons

2. **Molecules**: Combinations of atoms
   - Form fields
   - Search bars
   - Cards

3. **Organisms**: Complex UI sections
   - Navigation
   - Sidebars
   - Canvas tools

4. **Templates**: Page layouts
   - Dashboard layout
   - Authentication layout
   - Canvas layout

5. **Pages**: Complete pages
   - Home
   - Dashboard
   - Settings

## 🔄 State Management

The application uses various state management approaches:

1. **Local State**: React's useState
2. **Context API**: For shared state
3. **Server State**: Next.js server components

## 🛠 Development Workflow

```mermaid
gitGraph
    commit id: "initial"
    branch develop
    checkout develop
    commit id: "feature-1"
    branch feature
    checkout feature
    commit id: "feature-2"
    checkout develop
    merge feature
    checkout main
    merge develop
    commit id: "release"
```

For more detailed information about contributing to specific areas of the codebase, please refer to our [Contributing Guidelines](./CONTRIBUTING.md).