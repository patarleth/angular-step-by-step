Step 4 - replace html in views with directives
==============================================

Directives in AngularJS provide a way to create 'widgets' a binding of html and controller for layout w/code.

The easiest way to get started with directives is to use yeoman to created scaffold'd directives

    yo angular:directive espn-headline
    yo angular:directive mlb-team

The first step I make is to create  a directory to hold the html for the directives

    views/directives/

Next I create empty html templates (named the same as the directive) and move the the layout information from the views into the directives 

    move the html used foreach headline from views/headlines.html into views/directives/espn-headline.html
    move the html used foreach team from views/teams.html into views/directives/mlb-team.html

Now I modify the views to use the two new directives in the layout of the views by

    in views/headlines.html add -
        <espn-headline headline="next"></espn-headline>

    in views/teams.html add -
        <mlb-team team="mlbteam.sports[0].leagues[0].teams[0]"></mlb-team>
        AND
        <mlb-team team="team"></mlb-team>

In the scripts/directives/espn-headline.js I then create the linked variable 'headline' referenced in the previous step.

    scope: { headline: '=' },

Finally do the same for the other directive mlb-team and the var team

    scope: { team: '=' },

read more about variable scoping and directives here - http://www.befundoo.com/university/tutorials/angularjs-directives-tutorial/ which goes into enormous detail on what directives are and how to use the various parts.

Finally I delete the contents of both directives link function and replace with a logging function to help understand what link does.
