# vue-firebase
This is a repo for learning vue-firebase applications

[vue-firebase course](https://www.udemy.com/build-web-apps-with-vuejs-firebase/learn/v4/content)

[vue offical site](https://vuejs.org/)

## Preparation
- Download IDE [VSCode](https://code.visualstudio.com/)
- Install plugin for VSCode like Live Server, Monokai++, Vetur
- Install plugin Vue.js devtools for Chrome


## Lesson 0 - Vue 101 part 1
- What is Vue and why we want to use it
- Create a Vue project(SPA)
- Create a Vue object
- Use v-bind or ':' to bind Vue's object
- Use v-on or '@' to bind a event
- Use v-model to do two way data binding
- Use Vue event modifier
- Conditional render and looping

## Lesson 1 - Vue 101 part 2
- Install [node js](https://nodejs.org/en/) and npm
- Install Vue CLI via command 'npm install --global vue-cli'
- Create Vue project via command 'vue init webpack-simple myproject'
- Install all the necessary packages via command 'npm install'
- Run the project follow the readme file
- Understanding Vue components, usually the file name end with .vue
- Vue component usually contains a template, script and stylesheet sometimes.
- Vue component use data function instead of object, in order to protect data(will return a copy of data).
- main.js is entrance file for Vue
- App.vue is root component for Vue
- How to nesting components into root component
- Scoped CSS
- Passing data to other components via props
- Custom events, using emit to pass event through each component
- [Vue components Life-cycle hooks](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
- Making request and getting data with [Axios](https://jsonplaceholder.typicode.com/)
- Before using axios need to install it via command 'npm install axios --save'
- Using filters to format your output like slice your string body
- Using computed properties to represent your data without changing your original data

## Lesson 2 - Vue router
- Install project via command 'vue init webpack routing' and below is the choice i made when creating project
```
? Project name routing
? Project description A Vue.js project
? Author tracyqucy@gmail.com
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run npm install for you after the project has been created? (recommended) npm
```
- Understanding routing, the routings store in file index.js
- Using tag router-link to jump to other components
- Using router paramerters to pass data
- Watching the $router object to update some data automatically
- Using $router.push or router.go jump to other pages or components
- Understand why there is a hash symbol in the link and use history mode to remove it for dev ENV
- Understand class router-link-exact-active, means the link we current at.
- Understand class router-link-active, means we only at sublink of current link.
- Make use of above 2 classes to set up some style

## Lesson 3 - Project: Ninja Smoothies
- Create a new project called ninja-smoothies via command 'vue init webpack ninja-smoothies'
```
? Project name ninja-smoothies
? Project description A Vue.js project
? Author tracyqucy@gmail.com
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm
```
- Remove uncessary code and import [Materializecss](https://materializecss.com/) as stylesheet
- Install firebase via npm
- Install slugify via command 'npm install slugify --save'
- Login to [firebase console](https://console.firebase.google.com/) and create documents via filestore database
- Integrate firebase with Vue and apply CRUD via firestore API
- Install firebase plugin and use firebase command to deploy web app to firebase
- [Project: Ninja Smoothies](https://vue-ninja-smoothies-1357b.firebaseapp.com/#/)


## Lesson 4 - Project: Ninja Chat
- Create a new project called nijia-chat via command 'vue init webpack nijia-chat'
- Rename component HelloWorld to Welcome and create component NewMessage and Chat
- Create Vue router for Chat component and use router guards to filter invalid request
- Integrate with firestore and save new message into firebase
- Set up firebase listener to receive data change event
- Format time use [momentjs](https://momentjs.com/)
- Install vue plugin via command 'npm install vue-chat-scroll --save' so that scroll to the bottom at the beginning
- Set Vue mode to 'history' so that '#' will not show up in the link
- Deploy app the firestore
- [Project: Ninja Chat](https://ninja-chat-d4c11.firebaseapp.com/)

## Lesson 5 - Project: Geo nijia
- Create a new project called geo-nijias via command 'vue init webpack geo-nijia'
- Integrate with firebase
- Learn how to use [Google API](https://console.developers.google.com/) and [Google Map](https://cloud.google.com/maps-platform/)
- Learn how to use firebase to do authentication
- Learn some basic operation for Google Map AIP
- Another way to create router protector
- Deploy you application to firestore


