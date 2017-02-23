# LinkBot 🤖

## Project 3: [Coder Factory Academy](https://coderfactoryacademy.edu.au/) (CFA)

### Developed by: [@thrillho02](https://twitter.com/thrillho02) and [@jhinch](https://twitter.com/jhinch)

### Live site: [https://build-uhqvzrgwkk.now.sh](https://build-uhqvzrgwkk.now.sh)

Overview
========
* [Project brief](#project-brief)
* [Client](#client)
* [Problem](#problem)
* [Proposed Solution](#proposed-solution)
* [Technologies and tools used](#technologies-and-tools-used)
* [Proposed implementation](#proposed-implementation)
* [User Stories](#user-stories)
* [Design Planning](#design-planning)
  * [Mockups](#mockups)
  * [Whiteboard Screens](#whiteboard-screens)
  * [Handwritten Sketches](#handwritten-sketches)
  * [High fidelity wireframes](#high-fidelity-wireframes)
* [Development](#development)
  * [Backend](#back-end)
  * [MongoDB schema](#mongodb-schema)
  * [Frontend](#front-end)
* [Style Guide](#style-guide)
  * [Colours](#colours)
  * [Fonts](#fonts)
  * [Icons](#icons)
* [Further Information](#further-information)


## Project brief
- Design, build, deploy and present an application built for a real world customer.
- Meet with the business owner or organisation manager to find out what challenges they face.
- Find a problem that can be solved with an application.

## Client
- Patrick Smith | CFA Lead Trainer

## Problem
- When CFA students find useful resources, they often post them into the CFA Slack channel. 
- However, these resources often get lost amongst the other posts and comments, or are not stored in an easily accessible, or organised, way for future use. 
- This project will look at ways of preserving and filtering this information for the benefit of CFA students and teachers.
- After discussions with the client, it became apparent that the aim of the application was for it to integrate with Slack so students wouldn't have to post links in both Slack and our application (although this option should be included). 

## Proposed solution
- LinkBot is an application that will collect links posted in the class Slack channel using a Slack Bot, an API, and a ReactJS front-end to display the information of each link.
- It will include CRUD functionality for each link and will allow students to rate each link with more popular links rising to the top of the pile. 
- It is envisaged that this application could potentially serve as a 'recommended reading' list for future CFA students where the scouring of high quality online coding materials has been done for them. 

## Technologies and tools used
- NodeJS utilising Express.js web framework
- MongoDB utilising Mongoose object modeling tool
- ReactJS using Google’s material design UI components to design
- Slack API

## Proposed implementation
![App flow](/readme_assets/proposed_app_flow.jpg?raw=true "Optional Title")
- Must be a full-stack application where Slack links can be created and saved.
- Must contain a Slack bot that monitors Slack for links. 
- Must utilise a NodeJS API that accepts the link from the bot and serves it via a REST API.
- Users must have the ability to create, read delete, and vote on links.
- Users must be able to search for links.

## User stories
- As a teacher, I want to preserve the most useful resources posted to Slack.
- As a teacher, I don't want to have to post separately to another website / resource (it should be automatic).
- As a teacher, I want to be able to mark certain items as recommended / required reading for the course.
- As a moderator / teacher, I want to be able to remove links when necessary.
- As an incoming student, I want to access a list of recommended learning resources before the course starts.
- As a student, I want to see a list of the most useful resources.
- As a student, I want to have a list of resources that I can filter to get the most relevant programming information.
- As a student, I want to be able to post useful resources for other students.
- As a student, I want to quickly filter by the highest rated resources for a topic.
- As a user, I want to comment / update on resources that I find useful.
- As a user, I want to be able to comment / upvote / give tips etc. on items in the list.
- As a user, I want to filter resources by those that are free and those that are paid.
- As a user, I want to be able to filter links by categories.
- As a user, I want to be able to filter links by categories.
- As a user, I want to save my favourite posts and access them later in a 'favourites' folder.
- As a user, I want to know when something was posted and by whom.
- As a user, I want to know how many people have commented on a link.

## Design planning

Initial client discussions during the planning phase indicated that the application should follow a reddit-style approach to the layout of the application. A brainstorming session about the components and functionality was undertaken where some low-fidelity wireframes were created as can be seen below:

### Whiteboard screens

![whiteboard screens](/readme_assets/whiteboard_screens.JPG?raw=true "Optional Title")

### Handwritten sketches

![whiteboard screens](/readme_assets/pen_paper_screens.jpg?raw=true "Optional Title")

These initial sketches were then taken a step further where a high-fidelity Figma wireframe was created. This wireframing process allowed us to iteratively map out the required pages and components for the application. This gave us a better sense of the intended user workflow of the application. 

### High fidelity wireframes

#### Planning the components that we require:

![figma components](/readme_assets/figma_components.PNG?raw=true "Optional Title")

#### Planning the pages that we require:

![figma pages](/readme_assets/figma_pages.PNG?raw=true "Optional Title")

## Development
Due to a short development timeframe a decision was made to utilise Material UI for the design of the front-end of the application. Despite this, the wireframing process remained extremely useful for thinking about the component structure and routing requirements of the application.

### Back end
When a message is posted to Slack, Outgoing Webhook sends the message to the Slackbot API endpoint as a POST request with JSON information.

The API receives the Slack Post request and:
- Strips out the shared link URL.
- Sends a GET request to the link URL to gather the Open Graph assets, i.e. image, title, description, etc.
- Posts to website API with message information.
- This API receives the formatted SlackBot request and saves it to the MongoDB database hosted on Mlabs.com.
- This API is the access point for all resources - GET, POST, PUT, DELETE etc.
- Finally it posts the response to Slack acknowledging that the message has been saved.

### MongoDB schema 
![db_design](/readme_assets/db_design.PNG?raw=true "Optional Title")

### Front end
Standalone React Front-End.
- Lists resource information and votes.
- Allows voting and deletion of resources.
- Allows creation of new resources.
- Can expand each resource for more information.

![post_page](/readme_assets/post_page.PNG?raw=true "Optional Title")


## Style guide
### Colours
The primary colour that we chose was chosen in order to remain somewhat consistent with the Coder Factory Academy logo.

![colour](/readme_assets/colour.PNG?raw=true "Optional Title")

### Fonts
The default font used in Material UI is Roboto and this was considered appropriate for the site given its clean style.

![roboto](/readme_assets/roboto.PNG?raw=true "Optional Title")

### Icons
A number of Material UI icons were chosen for the site including 'android', 'thumb up', 'open in browser' and 'delete forever'.

![icons](/readme_assets/icons.PNG?raw=true "Optional Title")

![title_icon](/readme_assets/title_icon.PNG?raw=true "Optional Title")

## Further information
We used the project management tool Trello which easily enables the use of an Agile development methodology for developing the application. Our public Trello board can be viewed by clicking the link below:

[Trello Board](https://trello.com/b/nBv1xJOz/major-project-3-linkbot)
Contains:
- User stories
- Resource info
- Design info
- Database design information
- Development progress

## Social media updates
- [Twitter, 6 Jan 2017](https://twitter.com/jhinch/status/817620496724307968)
- [Twitter, 9 Jan 2017](https://twitter.com/jhinch/status/818443540065697793)
- [Twitter, 10 Jan 2017](https://twitter.com/jhinch/status/818982352013529088)
- [Twitter, 16 Jan 2017](https://twitter.com/jhinch/status/820809692586749952)
- [Twitter, 26 Jan 2017](https://twitter.com/thrillho02/status/824427798227881984)

[Return to Overview](#overview)
