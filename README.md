# React Flashcards

----------

##### Go to a folder where you want your project stored in terminal and enter this:
```
git clone https://github.com/pbmasigla/react-flashcards.git
```


##### CD into the folder and then enter (selects version of node):
```
nvm use
```


##### Install the needed node packages:
```
npm install
```

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
├── node_module		// installed packages
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
└── index.js			// main file to setup app/server
```
