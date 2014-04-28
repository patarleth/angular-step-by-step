Step 3 - Adding additional route(s) and controllers
===================================================

yo angular:route teams
edit scripts/services/espn.js
    add two new rest resources - allMlbTeamsResource and mlbTeamResource. As promised mlbTeamResource takes a route param :id
edit scripts/app.js
    add additional route /team/:id to route to a specific teamId
edit scripts/controllers/teams.js
    edit controller declaration to include $routeParams to get at the :id param (if exists) - https://docs.angularjs.org/api/ngRoute/service/$routeParams
    if routeParams.id exists call espn.mlbteam with id else call allmlb
    edit view to print the two team options
    edit index.html to link to the 3 routes
        index.html#/ - main.html view
        index.html#/teams - all mlb teams in views/teams.html
        index.html$/team/2 - team 2 also rendered in views/teams.html

Optimizations make a second view that only renders one team OR consolidate the view logic to handle both better.
