
# React Redux Starter

A simple react redux starter without the oppinionated addons. Webpack hot realoading and ES7 & ES7 syntax


## Stack

+ React
+ React Router
+ Redux
+ Sagas
+ Webpack w/ Hot Reload
+ Babel
+ Sass
+ ESLint
+ ES6 & ES7

# Installation
1. `git clone git@github.com:nbwar/react-redux-starter.git`
2. `npm install`

# Development

1. `npm start` this will start webpack w/ hot reloading and run the linter
1. `npm run build-dev` build files without `ENV=development` to public/

\* `npm start` will compile assets in memory so you may see console warning for missing `main.css`
\*\* Also you will need to remove `public/js` And `public/css` to go back to hot reloading

# Deployment
1. `npm run build-prod` build files without `ENV=production` to public/



# TODO
1. Production deplyoment steps
2. Fix issue with after running `npm build-` and then npm start using both stylesheets
