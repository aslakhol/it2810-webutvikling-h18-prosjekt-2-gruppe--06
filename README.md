# Business-Card Generator 

##How to set up 


## Abstract


##Our solution


## Technologies

##React
As demanded of the project description we have designed our application with React, ES6 and JSX. We started our development by running the command `npx create-react-app`. 

###Create-react-app
Running create-react-app gives you a nice boiler-plate of a react app which gives you a flying start to your development. Create-react-app gives you a lot of nice configurations like babel.js, a live development server and react jsx, and ES6 support. As mentioned above we chose a different file-structure than the one included in create-react-app. 

###ES6
All of our simpler funcitons uses the fat-arrow functions which was introduced in ES6.

###JSX 
JSX (JavaScript eXtention) is an extension to react which makes it possible to write XML directly in to the render function. So instead of writing React.Createelement(Menu,{classname=hei} you can write <Menu className="hei"/>

###FontAwesome


## AJAX
All of our SVGs and the text is loaded dynamically, using AJAX. In our applica

###Text
The text is separated in three different json files, one for each category. This means that when you choose a category the whole file is loaded in to memory and only one of the texts are chosen. We chose to do it this way for simplicity, and since it gives minimal extra overhead.  

###SVG
The SVGs are loaded separately when needed. We insert the image using the built in function dangerouslySetInnerHTML, which is generally considered bad practice, but since we are in full control over what is loaded, it is not a security issue. 

###"Caching"
As mentioned above our files are loaded separately when needed and not reloaded when you switch tabs. CardMenu holds the states of the different cards and passes them the media as props, when it a CardDisplay notices that its media is null, it calls initialize state which makes the webcalls. When a category is changed, all cardstates are set to `null`. This means that a picture might be loaded, twice if the category is changed. The project description was a bit unclear    

### Fetch
We chose to use fetch for our AJAX-operations. We chose over other frameworks like axios and Jquery's XMLHTTPrequest  since it was easy to get started and it's simpler to work with promises than callbacks.  




### Cooperatio


### Conclusion?
