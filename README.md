# Margin of Victory Visualizations: US House of Representatives (2016)

This React-based web app depicts the nationwide results of the 2016 election of the US House of Representatives. Final vote tallies were extracted from PDF using algorithms written in Python. Grayscale tones depict a state's average margin of victory on the map, while a comparison of each district is shown on the right. State and district details are displayed on user selection. The chart and map employ customized React components that utilize JSX and ES6 JavaScript. The SPA architecture allows for a responsive, dynamic UX/UI. Bootstrap is used ease of formatting.

## Getting Started

The web app is deployed by serving the `index.html` file. This needs to link to the `bundle.js` file as well as the CSS files `react-select.css`, `react-vis.css`, and `style.css`. The app, as it appears in the Git repository, makes use of references to a static folder maintained by a specialized Flask server. These external references in `index.html` will need to be amended to reflect whatever backend implementation will be used.

## Further Development

Clone the application files from the Git repository. In the base directory, run `npm init` to initialize an npm package and then `npm start` to initialize a development server. As currently configured, `webpack.config.js` will integrate the project files into a single, minimized `bundle.js` file that is suitable for production. For a faster, more developer friendly environment, remove the `plugins` entry in `package.json`. This will reduce the time required to compile `bundle.js`. 
