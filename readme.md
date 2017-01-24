# LinkBot 🤖
## Project 3 for [CoderFactory Academy](https://coderfactoryacademy.edu.au/)
### By [@thrillho02](https://twitter.com/thrillho02) and [@jhinch](https://twitter.com/jhinch)

#### NodeJS / Express API hosted on Heroku: [https://blooming-everglades-90688.herokuapp.com/](https://blooming-everglades-90688.herokuapp.com/)
#### ReactJS frontend hosted: [https://build-elkpuqkpan.now.sh](https://build-elkpuqkpan.now.sh)

**Project Trello:** [Trello Board](https://trello.com/b/nBv1xJOz/major-project-3-linkbot)
**Project Figma:** [Figma](https://www.figma.com/file/OmPop1ucxxg2tiWpxDAOjYEs/LinkBot)

LinkBot will collect links posted in our class Slack using a Slack Bot, an API and a React front end to display the information.

Created using:
- NodeJS
- Express
- MongoDB
- React
- Slack API

## Problem
We post a lot of handy resources in our Slack channels, however they often get lost. This project will look at ways to preserve and filter this information for the benefit of CoderFactory students and teachers. 

## Client
Patrick Smith - Coder Factory Lead Trainer

## Services Provided
 - A place to save the links
 - Some way of monitoring Slack for appropriate messages
 - A way of getting the information from Slack to another service
 - A way of displaying the information

## Proposed implementation

![App flow](/readme_assets/proposed_app_flow.jpg?raw=true "Optional Title")

- A Slack bot that will look for links and send information via post request. 
- A NodeJS API that will accept the information from the Bot and also serve it via a REST API.
- A React frontend that will display data from the NodeJS API

## Mockups
Whiteboard screens

![whiteboard screens](/readme_assets/whiteboard_screens.JPG?raw=true "Optional Title")

Pen and paper sketches

![whiteboard screens](/readme_assets/pen_paper_screens.jpg?raw=true "Optional Title")

## Further Information

[Trello Board](https://trello.com/b/nBv1xJOz/major-project-3-linkbot)
Contains:
- User stories
- Resource info
- Design info
- Database design information

## Social Media Updates
- [Twitter, 6 Jan 2017](https://twitter.com/jhinch/status/817620496724307968)
- [Twitter, 9 Jan 2017](https://twitter.com/jhinch/status/818443540065697793)
- [Twitter, 10 Jan 2017](https://twitter.com/jhinch/status/818982352013529088)
- [Twitter, 16 Jan 2017](https://twitter.com/jhinch/status/820809692586749952)

## Progress
- 16 Jan 2017 - API hosted on Heroku
