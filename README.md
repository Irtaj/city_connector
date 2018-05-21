![Build Status](https://codeship.com/projects/1d9d24e0-2bd2-0136-29b8-0a7f7ac78d5b/status?branch=master)
[![Code Climate](https://codeclimate.com/github/Irtaj/city_connector/badges/gpa.svg)](https://codeclimate.com/github/Irtaj/city_connector)
[![Coverage Status](https://coveralls.io/repos/github/Irtaj/city_connector/badge.svg?branch=master)](https://coveralls.io/github/Irtaj/city_connector?branch=master)

# README

City Connector is a platform for companies to connect with one another via chat and also post requests for the resources that are needed.

* The Homepage:

  A user may view the list of companies that are already in the database. Their locations are reflected as markers in the map, which pulls in Google's map APIs.

  Previous alerts for resources that have been entered by previous users are also visible.

  A company can be searched with the search bar on top of the homepage.

* Company Show Page:

  To access the show page for each company, a user may click on the company name.

  The show page reflects the company information a user has submitted to the database.

* User's Profile Page (only visible upon signing up/logging in):

  A user has access to their user profile page, through a link on top of the homepage.

  The user's profile page gives the user access to submit a request for resources or submit a new form.

  User's can also chat with one another, regarding any resource they may need, through the chat bar on top of the user profile page. The chat bar is implemented through Action Cable. This is a current feature that I am currently developing. The end product will allow a user to subscribe to multiple chat rooms depending on the resources they need to communicate about.

* Under the Hood:

  - Ruby version 2.3.3
  - PostgreSQL as the database for Active Record
  - RSPEC and Capybara for testing

  - Foundation for HTML Layout

  - Geokit to translate an address to Latitude and Longitude coordinates
  - Google's Map APIs

  - Action Cable for the chat functionalities
  - Redis adapter to run Action Cable in production

* Image Credit:

  The city background (city.jpg) is originally by Phil Desforges on Unsplash.com.

* Articles:

  The articles and git repositories that helped most with the Action Cable chat feature:

    - Using Action Cable with React, by Dakota Lillie https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296

    - koacksel, by nwalberts
    https://github.com/nwalberts/koacksel

  The git repositories that helped most with the Google Maps feature

    - ride-ferox, by AL6981
    https://github.com/AL6981/ride-ferox
