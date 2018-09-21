# Business-Card Generator 

## How to set up 

Clone the repo locally

Run `npm install`

Run `npm start`

The app is now available on localhost:3000


## Abstract


## Our solution

We based our project on an idea for a tool we have wanted to create for a time. We where interested in creating a business card generator for students who do volunteer work for Online. The tool would have you pick which title you have, which comite or group you are in, and generate a card for you. 

Due to the specific requirements of the project we couldn't design the tool to be as usefull as we had hoped, but we decided that this would fit the requirements well enough and that our work here could be a good starting point for future development. 

While the product we have created doesn't quite work as a business card generator, one can see the projects roots in the implementation. We believe it fulfills all the requirements quite nicely and was a very good tool to investigate some of the issues we will encounter when we one day complete the final product. 

## Technologies

## React
As demanded of the project description we have designed our application with React, ES6 and JSX. We started our development by running the command `npx create-react-app`. 

### Create-react-app
Running create-react-app gives you a nice boiler-plate of a react app which sets you off to a flying start to your development. Create-react-app gives you a lot of nice configurations like babel.js, a live development server and react jsx, and ES6 support. As mentioned above we chose a different file-structure than the one included in create-react-app. 

### ES6
All of our simpler functions uses the fat-arrow functions which was introduced in ES6.

### JSX 
JSX (JavaScript eXtention) is an extension to react which makes it possible to write XML directly in to the render function. So instead of writing React.Createelement(Menu,{classname=hei} you can write <Menu className="hei"/>

### FontAwesome
FontAwesome was used for icons. FontAwesome is an external framework which was not allowed in the project description. However FontAwesome was specifically allowed on Piazza. 

## AJAX
All of our SVGs and the text is loaded dynamically, using AJAX. In our applica

### Text
The text is separated in three different json files, one for each category. This means that when you choose a category the whole file is loaded in to memory and only one of the texts are chosen. We chose to do it this way for simplicity, and since it gives minimal extra overhead.  

### SVG
The SVGs are loaded separately when needed. We insert the image using the built in function dangerouslySetInnerHTML, which is generally considered bad practice, but since we are in full control over what is loaded, it is not a security issue. 

### Caching
As mentioned above our files are loaded separately when needed and not reloaded when you switch tabs. CardMenu holds the states of the different cards and passes them the media as props, when it a CardDisplay notices that its media is null, it calls initialize state which makes the webcalls. When a category is changed, all cardstates are set to `null`. This means that a picture might be loaded, twice if the category is changed. The project description was a bit unclear    

### Fetch
We chose to use fetch for our AJAX-operations. We chose over other frameworks like axios and Jquery's XMLHTTPrequest  since it was easy to get started and it's simpler to work with promises than callbacks.  




### Cooperatio


### Conclusion?
