# 📚 InfraBoard Templates Guide

A comprehensive guide for working with templates and assets in the InfraBoard project.

## 📋 Table of Contents

```mermaid
mindmap
  root((Templates))
    Assets
      AWS Icons
      GCP Icons
      Custom Icons
    Store
      AWS Services
      GCP Services
      Templates
    Components
      Icons
      Layouts
      Modules
```

## 🎨 Asset Management

### Icon Creation Process

```mermaid
flowchart LR
    A[SVG File] --> B[SVGR Conversion]
    B --> C[TSX Component]
    C --> D[Import to Index]
    D --> E[Use in Project]
```

### Steps to Create Icon Components

1. **Convert SVG to TSX**:
   - Copy the SVG code
   - Visit [SVGR Playground](https://react-svgr.com/playground/?dimensions=false&jsxRuntime=automatic)
   - Paste SVG code and get React component
   - Create icon file using proper naming conventions

2. **Component Integration**:
   ```typescript
   // Example icon component
   import { IconInterface } from '@/assets/iconInterface'
   import React from 'react'
   
   function CustomIcon({ className }: IconInterface) {
     return (
       <svg className={className}>
         {/* SVG content */}
       </svg>
     )
   }
   
   export default React.memo(CustomIcon)
   ```

3. **Index Registration**:
   ```typescript
   // src/assets/index.ts
   import CustomIcon from './path/to/icon'
   
   export const Icons = {
     CustomIcon,
     // ... other icons
   }
   ```

## 📁 Directory Structure

### AWS Assets (`src/assets/aws/`)
```
aws/
├── compute/
│   ├── ec2Icon.tsx
│   ├── lambdaIcon.tsx
│   └── ...
├── network/
│   ├── vpcIcon.tsx
│   └── ...
└── index.ts
```

### GCP Assets (`src/assets/gcp/`)
```
gcp/
├── compute/
│   ├── vmIcon.tsx
│   └── ...
├── network/
│   └── ...
└── index.ts
```

## 🏗 Store Organization

```mermaid
graph TD
    A[Store] --> B[AWS]
    A --> C[GCP]
    B --> D[Compute]
    B --> E[Network]
    B --> F[Applications]
    C --> G[Compute]
    C --> H[AI]
    C --> I[Applications]
```

### Store Structure
- `store/aws/`: AWS service definitions
  - `compute/`
  - `network/`
  - `applications/`
  - `others/`
- `store/gcp/`: GCP service definitions
  - `compute/`
  - `ai/`
  - `applications/`
  - `others/`

## 💻 Usage Examples

### Using Icons
```typescript
import { AWSIcons } from '@/assets/aws'

const { EC2Icon } = AWSIcons

function Component() {
  return <EC2Icon className="w-6 h-6" />
}
```

### Left Sidebar Data
```typescript
// Example sidebar configuration
const leftSidebarData = {
  compute: {
    title: 'Compute',
    items: [
      {
        name: 'EC2',
        icon: EC2Icon,
        // ... other properties
      }
    ]
  }
  // ... other categories
}
```

## 🔧 Best Practices

1. **Icon Naming**:
   - Use PascalCase for component names
   - Append 'Icon' suffix to icon components
   - Group related icons in appropriate directories

2. **Component Organization**:
   ```mermaid
   graph TD
       A[Components] --> B[Atomic Design]
       B --> C[Atoms]
       B --> D[Molecules]
       B --> E[Organisms]
       C --> F[Icons]
       C --> G[Buttons]
       D --> H[Cards]
       E --> I[Sections]
   ```

3. **File Structure**:
   - Keep related files together
   - Use index files for exports
   - Maintain consistent naming conventions

4. **Performance**:
   - Use React.memo for icon components
   - Implement lazy loading where appropriate
   - Optimize SVG files before conversion

## 🚀 Quick Start

1. **Adding New Icons**:
   ```bash
   # Create new icon component
   touch src/assets/aws/compute/newServiceIcon.tsx
   
   # Update index file
   vim src/assets/aws/index.ts
   ```

2. **Creating Store Entries**:
   ```typescript
   // store/aws/compute/index.ts
   export const computeServices = {
     ec2: {
       name: 'EC2',
       icon: EC2Icon,
       description: '...'
     }
     // ... other services
   }
   ```

## 🔍 Quality Checklist

- [ ] Icon follows naming convention
- [ ] Component is memoized
- [ ] SVG is optimized
- [ ] TypeScript types are defined
- [ ] Component is exported correctly
- [ ] Documentation is updated

## 📚 Additional Resources

- [SVG Optimization Tools](https://jakearchibald.github.io/svgomg/)
- [React Icon Best Practices](https://react-icons.github.io/react-icons/)
- [TypeScript Guidelines](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html)

---

For more information, refer to our [Contributing Guidelines](./CONTRIBUTING.md).