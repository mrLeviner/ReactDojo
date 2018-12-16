This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<!--
Example of a custom init file:

/* BEGIN INIT FILE */
var USER = process.env.GITHUB_USERNAME || 'YOUR_GITHUB_USERNAME';
var cp = require('child_process');
var priv;

module.exports = {
  name: prompt('name', basename || package.name),
  version: '0.0.1',
  // Sets repo to private
  private: prompt('private', 'true', function(val){
    return priv = (typeof val === 'boolean') ? val : !!val.match('true')
  }),
  create: prompt('create github repo', 'yes', function(val){
    val = val.indexOf('y') !== -1 ? true : false;

    if(val){
      console.log('enter github password:');
      cp.execSync("curl -u '"+USER+"' https://api.github.com/user/repos -d " +
        "'{\"name\": \""+basename+"\", \"private\": "+ ((priv) ? 'true' : 'false')  +"}' ");
      cp.execSync('git remote add origin '+ 'https://github.com/'+USER+'/' + basename + '.git');
    }

    return undefined;
  }),
  main: prompt('entry point', 'index.js'),
  repository: {
    type: 'git',
    url: 'git://github.com/'+USER+'/' + basename + '.git'
  },
  bugs: { url: 'https://github.com/'+USER'/' + basename + '/issues' },
  homepage: "https://github.com/"+USER+"/" + basename,
  keywords: prompt(function (s) { return s.split(/\s+/) }),
  license: 'MIT',
  cleanup: function(cb) {
    cb(null, undefined)
  }
}
/* END INIT FILE */
 -->
