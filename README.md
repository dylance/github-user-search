# About

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the [Typescript Template](https://create-react-app.dev/docs/adding-typescript/) to set up a quick, easy to run development environment for a react web app.

This app performs paginated searching of a user's github repositories ranked by stars with the option to filter by a list of commonly used programming languages.

Thank you for checking it out :)

### Additional dependencies used
- styled-components
- react-icons
- prettier

### Additional features that could be added

- Use github Oauth so private repositories can be searched and searches will not be rate limited for logged in users
- Create an async user search input so valid github users can be shown while searching for users
- Make SearchPagination component scale well to user's with a large amount of repos
- Add additional filtering/sorting and don't hardcode filters ie: how languages were done
- Return additional data about repositories from a search and include info about the user that was searched
- Use state management libary such as Context API or Redux to manage state as app grows
- Improve styling and/or use a component library for styling
- Add tests


## Scripts

In the project directory, you can run:

- `npm start` - Runs the app in the development mode.
- `npm test` - Launches the test runner in the interactive watch mode.
- `npm run build` - Builds the app for production to the `build` folder.
- `npm run eject` - **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
- `npm run prettier` - Formats files using prettier.
