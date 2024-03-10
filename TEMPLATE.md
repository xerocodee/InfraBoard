
# Templates Tutorial

- `src/assets/`:
    - `aws/`: This directory contains all the icons related to AWS services. The icons are the `.tsx` file.
        - `compute/`: contains icons for aws compute services.
        - `network/`: contains icons for aws networking services.
        - ...
    - `gcp/`: This directory contains all the icons related to GCP services. The icons are the `.tsx` file.
        - `compute/`: contains icons for gcp compute services.
        - `network/`: contains icons for gcp networking services.
        - ...



## Steps to create .tsx file from svg file.

- Copy the svg code.
- [Go to this link](https://react-svgr.com/playground/?dimensions=false&jsxRuntime=automatic)
- Paste the SVG code here. The site will generate the React component. Create the icon file in the project and use proper naming conventions.
- import the tsx component you create earlier in `src/assets/index.ts` file.
- Add icon in icon object.

## How to use this icon/image component.

- import {`AWSIcons`} from `@/assets/aws`
- const {`YourIconComponentName`} =  `AWSIcons`
- `<ComponentName className=""/>` use this when required.



## Store Folder `src/store`

- `aws/`: contains data file about aws services.
    - `compute`
    - `network`
    - `applications`
    - `others`
    - ...

- `gcp/`: contains data file about gcp services.
    - `compute`
    - `ai`
    - `applications`
    - `others`
    - ...

The subdirectories (eg: compute, ai, applications, etc.) object files are then imported into `store/gcp/index.ts` and `store/aws/index.ts`. The subdirectories object files may contains react icons or custom tsx icon files.

- `leftSidebarData` : The file that is responsible for rendering the tabs in the left sidebar You can easily add and remove the tabs from this file.