# DEV_dashboard_2019

## Add Widget:

- edit `back-end/prisma/datamodel.prisma` to add widget type to `enum WidgetType`
- push and deploy to server `rm -rf nodes_modules/ ; prisma deploy ; npm i : npm run start`
- generate new typescript types in `./dashboard/tools/` run `npm i ; npm run gen`
- create folder in `./dashboard/src/Components/Widget/`
  - create a addWidget class 
  - create display class:
    - containing members function:
      - `getInitSettings` to get content (ReactNode) to add widget
      - `triggerCornerClick` to trigger click on corner click
      - `updateMe` to update content
      - `getContent` to get content (ReactNode) of the widget
      - `getSettings` to get content (ReactNode) of the widget in settings mode
    - and taking as parameters:
      - `widget`
      - `moveLeft`
      - `moveRight`
      - `remove`
- add widget in `./dashboard/src/Components/Menu/widgetListMenu.tsx`:
  - add button
  - add call to `getInitSettings` of the widget in the switch of `handleAddCustomWidget`
- add widget into switch in `./dashboard/src/Components/Pages/homePage.tsx`
