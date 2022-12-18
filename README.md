# Homebar
This application is made to help users create coctail drinks from the comfort of their own home. It allows users to browse and search for specific cocktails, containing their ingredients and instructions to make them. Users are also able to create their own list of ingredients which they have at home, so that they can find drinks that they are able to make from their currently available ingredients. The search function allows users to switch between all drinks matching their search as well as only showing the drinks available based on their ingredients through a filter.

## Find the application here
https://home-bar-db-27f75.web.app/

## Setup: 
Head to directory of the repo and run npm install followed by npm start in the console.
If not opened automatically, head to http://localhost:3000/

#From Mid-project review:

## What has been done
The first installment of the project has been started, we have set it up on firebase and connected the API to our application. We have created a view where a user can search for a drink and the API returns the drinks that are avaliable for that search. Currently, not all views are entirely finished but the funcionality that works is that users can navigate to "search" and look up drinks of their choice.

## What we plan to do
Our first priority now is to implement persistence so that we can save things to the firebase DB. What is planned to implement is a functionality that the user provide the ingredients at avaliable at the users home and the application presents avaliable drinks that can be made from those ingredients. We also want to set up user accounts so that each user can save their own list of ingredients that they have at home. A filter to the search based on what the users have at home also needs to be added. Another funcionality we want to add is for users to be able to save their favourite drinks. 

# Project structure

## Presenters
These files creates the logic behind each UI that the users sees, Example: when the user presses the button, the logic behind what will happen is implememnted here. This is not implemented yet.

## Views
These files is what will be shown to the users.

### Adding Ingredients
This is the first installment to where the idea is that the user gives ingredients and the application will find drinks that can be done with those ingredients. 

### Login
This is the first page that will avaliable to the user, the presenter will have logic and make sure that the user is logged in and the views will show you a UI that can be navigated.

### My Ingredients
This is also a functionality that will be used in the adding ingredients, just like addingredients this is not implemented yet.

### Search
This is how the search is done, the presenter will have the logic behind how a search is done and the view will display what we get back from the API

### Startscreen
This screen is going to be used as a start screen after the user have logged in. Here we can choose the most popular drinks or navigate to the search functionality in the app.

## CoctailModel
The program is run in application state so therefore we need a model similar to the labs.
