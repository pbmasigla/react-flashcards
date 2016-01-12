# Test Boilerplate - A Starter App

This is a test boilerplate with Koa, Gulp, Webpack, Babel, and React.

----------

##### Go to a folder where you want your project stored in terminal and enter this:
```
git clone https://github.com/pbmasigla/test-boilerplate.git
```


##### CD into the folder and then enter (selects version of node):
```
nvm use
```


##### Install the needed node packages:
```
npm install
```

#### To start server, run:
```
npm start
```
then go to http://localhost:3000/


##### To start app, in a separate terminal window or tab, run:
```
npm run dev
```
then go to http://localhost:8080/

----------

### Style class rules
###### Refer to http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/ for BEM

----------

### Overview App Structure
```
├── build		         // where minified files for browser are compiled to
├── node_modules		// installed packages
├── src				// main app files
├── .babelrc	        // config for babelrc
├── webpack.config.js	// config for webpack compilation
└── package.json		// node packages to be installed
```

### src file structure (/src/)
```
├── client
│		├── js
│		│		├── components	// react components
│		│		├── app.js 		// main app that is mounted to views
│		│		└── history.js 	//manage session history
│		│
│		├── scss				// styles
│		└── assets			// asset files such as images
│
├── server
│		├── server.js			// server.js
│		└── views				// html file for app to attach to
│
└── index.js			// main file to setup app/server
```

### Component structure (/src/client/js/components)
###### Smart and dumb components: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.9e184iahk
```

└── To Do List				// container (smart component)
		├── input				// input component (dumb component)
		├── list				// list component (dumb component)
		└── submit			// submit button component (dumb component)

```
