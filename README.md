# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Structure

# Index.html
- The index.html file defines the basic structure of the web page and provides the necessary metadata for its proper functioning, as well as links to the static resources required by the application.

# App.tsx
- This App.tsx document defines the main component of a React web application called App. It imports the NeoGrid component from another file and structures the UI using JSX. The `<header>` element displays the application header with styling, including the title "Near-Earth Object Overview". The `<NeoGrid />` component is rendered, likely displaying a grid of near-Earth objects. Finally, the App component is exported as the main component of the application.

# Grid.tsx
-This Grid.tsx document is a React component that displays data in a grid using the Ag-Grid library. It imports necessary components and styles from Ag-Grid. It defines columns for the grid, specifies sorting and filtering options, and provides value formatting functions. The NeoGrid component renders the Ag-Grid grid with the provided data and column definitions. Finally, it exports the NeoGrid component for use in other parts of the application.

# Index.tsx
- This Index.tsx document is responsible for importing the necessary modules, creating the root entry point of React, and rendering the App component in the browser's DOM, all while strictly applying React's mode.


## PCI Energy Solutions

Requirements: Most recent LTS version of Node. If you cannot install this version of Node on your machine, you can code/pseudo-code to the best of your ability.

This is an example project that presents you with a made-up scenario that will mimic some of the tasks that may need to be completed on a daily basis at PCI. It is intended to allow you to showcase your experience. If at any point something is unclear, please list it within this README. If you make any assumptions along the way, list those here as well. Also feel free to write anything else here that you would like considered when we review your approach. Do not install any new packages. We should be able to view your UI after running "npm install" and "npm start". Do not make any changes to the data source "near-earth-asteroids.json". If you feel you cannot complete one of the tasks, please move on to the next one and explain in this README.


## Planification

- Git Hub Projects (creating issues)


### Scenario

Within this repo is a demo UI that our team needs to make some changes to before it goes to production. Clients have requested some new features, and it is your job to implement those. We have a few "stories" (or changes to be made) below. Please commit your changes along the way. On your final commit for each change, use the message "Task #X" where X is the number next to the task below.

## Library

The documentation for grid component can be found here: <https://www.ag-grid.com/react-data-grid/>.

It was a nice pleasure to work with AG GRID Library, I have learned a lot in a short period of time.

## Tasks

1. The client would like a title on this page. Above the table, but within the app window, add a title that says "Near-Earth Object Overview". Please also make this title replace the default "React App" that shows on the tab for this window. This will give a clear indication of what the table and application are for. ✅

2. While this list of data is great, it would be useful for the user to be able to interact with beyond scrolling. We need to add sorting to the grid. Make the changes necessary to allow the user to sort all columns. String columns should sort alphabetically. Numerical columns should sort by value. Date columns should sort chronologically. In addition to sorting, the user wants to be able to filter their data. Numeric columns should have a filter that supports numerical filtering, and string columns should have a filter that supports string filtering. ✅

3. The users have complained that the dates are not very readable. Please display the dates in a format that is more human-readable. I will trust your input on what format is best in this case. ✅

4. Rather than just displaying Y or N or n/a in the Potentially Hazardous column, we should display "Yes", "No", and a blank cell for those values respectively. ✅

5. The users would like to be able to copy the information from this grid into a software like Excel. The user should be able to select any portion of this grid, copy the data, and paste it into excel. When they do this, they should get only the data that is copied, and they should get that data as it is displayed within the grid.
NOT COMPLETED: While researching in the documentation I tried as much as I can to bring `enableRangeSelection= {true}` in order to select any portion of the grid but It was not possible because I did not have the authorization to use it since it's "Enterprise ver.".

6. The users want to be able to quickly clear all filtering and sorting that is going on in their grid. They want one button they can click that will restore the grid to it's default view, unfiltered and unsorted. Can you add a button (of any kind) to the right of the title we added previously? The button should say "Clear Filters and Sorters" and should be positioned with a 15px space between the title and the button.
NOT COMPLETED: Time was running out. I tried to look up to it while trying different solutions but I couldn't not reach it. I'm sure if I had more time I would be able to complete it.

7. Lastly, this grid is going to go to production soon, and other developers will begin doing work on this project. While creating this demo, considerations were not made to keep the code clean and organized. Please organize this codebase so that it is easier to find and make changes to components, as well as finding any interfaces, types, or helper functions. ✅