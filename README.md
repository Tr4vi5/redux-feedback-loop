# Redux Feedback Loop

This is a feedback submition app that I built to practice using React client-side routing and Redux. 

## SETUP

Create your database and tables using the provided `data.sql` file with Postico. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

## Features

- The app uses radio and text forms to create a feedback object in a Redux store that gets sent to a Postgresql database at the end of the process. 

- Progress bar to indicate how far the user is into the feedback process.

- /admin route that displays all of the feedback that has been submitted
    - Ability to toggle a "flag for review"
    - Ability to delete a feedback entry from the admin page

## Technologies Used

- React
- Redux
- Axios
- Node.js
- Express
- Postgresql
- moment.js
- JavaScript
- HTML
- CSS
- Postico
- Postman


### Task List
- [x] Add components for client side routes (feeling, understanding, support, comments, thank you, admin)
- [x] Build out each component's JSX forms
- [x] Create redux store and reducer for keeping track of feedback
- [x] Dispatch user inputs into the feedback reducer on index.js
- [x] Build progress bar to indicate to the user where they are in the process
- [x] Send object to Postgresql using Axios
- [x] Get feedback from database to display on admin page
- [x] Use moment.js to format the date from the database
- [x] Add the ability to delete an existing feedback entry on the /admin view
- [x] Add the ability to flag an existing feedback entry for further review on the /admin view
- [x] Add delete confirmation prompt prior to sending delete request to database


### STRETCH GOALS
- [] Indicate via conditional rendering which feedback has been flagged for review.
- [] Improve the styling of the app using Material-UI theme, cards, snackbars, buttons, nav bar, and icons
- [] Add authentication to the app for the ability to keep track of multiple users
- [] Deploy project to Heroku 