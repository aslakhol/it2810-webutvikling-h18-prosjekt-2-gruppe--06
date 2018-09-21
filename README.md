# Business-Card Generator 

## How to set up 


### Local install
Clone the repo locally

Run `npm install`

Run `npm start`

The app is now available on localhost:3000

### Host publicly
Your credentials to the server is your ntnu username and password

`ssh ntnuusername@it2810-06.idi.ntnu.no`  
`cd prosjekt2`  

clone the repository.

`npm install`  
`npm run build`  
`rm -rf /var/www/html/prosjekt2/`  
`sudo mv build /var/www/html/prosjekt2`  


## Our solution

We based our project on an idea for a tool we have wanted to create for sometime. We where interested in creating a business card generator for students who do volunteer work for Online. The tool would have you pick which title you have, which comite or group you are in, and generate a card for you. 

Due to the specific requirements of the project we couldn't design the tool to be as usefull as we had hoped, but we decided that this would fit the requirements well enough and that our work here could be a good starting point for future development. 

While the product we have created doesn't quite work as a business card generator, one can see the projects roots in the implementation. We believe it fulfills all the requirements quite nicely and was a very good tool to investigate some of the issues we will encounter when we one day complete the final product. 

## Technologies

### React
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
All of our SVGs and the text is loaded dynamically, using AJAX. 

### Text
The text is separated in three different json files, one for each category. This means that when you choose a category the whole file is loaded in to memory and only one of the texts are chosen. We chose to do it this way for simplicity, and since it gives minimal extra overhead.  

### SVG
The SVGs are loaded separately when needed. We insert the image using the built in function dangerouslySetInnerHTML, which is generally considered bad practice, but since we are in full control over what is loaded, it is not a security issue. 

### Caching
For caching we have made use of reacts states using in-memory objects. Our files are fetched separately when needed and not reloaded when you switch tabs. CardMenu holds the states of the different cards and passes them the media as props, when it a CardDisplay detects that its media is null, it calls initialize state which makes the webcalls to fetch the assets. When a category is changed all cardstates are set to `null`. 

This is not true caching, as all objects are lost on refresh. However we believe it is sufficient for the requirement of only fetching assets when neccessary"

### Fetch
We chose to use fetch for our AJAX-operations. We chose over other frameworks like axios and Jquery's XMLHTTPrequest  since it was easy to get started and it's simpler to work with promises than callbacks.  

## Responsive Web Design

We have developed the application with a goal in mind to end up with a responsive application that adapts to different screensizes. Since mobile units and different web-browsers and computerscreens vary. In order to achieve satisfying user-experience we have made the applications 

We did not use mobile-first development - but since we encountered some obstacles in the development phase we have decided to use mobile-first development for the next project, since we that way will get through some of the bigger obstacles early in the development phase. 

**Scaling**

We have enabled the SVG-elements to scale according to screen size. 

**ViewPort**

Viewport is implemented in the generated HTML-file. Viewport has enabled us to design an application which is responsive - where the width, height and size of elements is automatically set according to the size of the device beeing used. 

**Flexbox**

Flex is a set of rules, which allows the developer to automatically stretch columns and rows of content across parent containers. We have used flex in our  dropdown menu. 

## Testing

To fulfill the demands of testing that was asked for this assignment, we chose to test the web-application on three different device sizes. These were Apple iPhone 6 standard size (1334x750), iPad (768x1024) and desktop size (1920x1080).
To test it on these different devices we made a temporary web-server using ngrok.com and acessed the site on the different devices. We also rotated the smaller screens (iPhone & iPad) to see how the scaling responded.

As said above we did not use mobile-first development which resulted in having to fix a few issues as the web-application did not scale properly to smaller device screen sizes in the beginning. This however did not take long to fix, but in retrospect it would have been a good idea to at least test the application earlier and more often on different screen sizes.


## Cooperation

Throughout this project we have cooperated as a team, with good communication and plenty of hours together coding alongside each other. Even though we got a new member on or group towards the end, he managed to catch up and contribute. 

Git makes it easy to cooperate with built in version-control. Throughout the project we worked on different branches to add different functionality. When we pushed to master, at least one other member on the group had to do a thorough code review and be pleased with the committed code before the pull request was merged to master.
