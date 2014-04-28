Step by step example how to use yeoman making an angular app
============================================================

pre-reqs - a commandline compiler toolchain (gcc etc.) nodejs.org, yeoman.io, and the yeoman angular generator

Even if you don't want to install yeoman (here on just refered to as yo) you can use this tutorial to see what it does and how it helps scaffold an angularjs single page web application.

What is all this cr4p? Here are the highlights -

    app/ - angular js application and dependencies installed using bower.
    test/ - unit and integration tests go here
    bower.json - javascript dependencies and versioning for your project
    .bowerrc - when/if you run bower install (bower is a tool that is part of yeoman), the bowerrc file defines where to put the dependencies.
    .jshintrc - jshint rules. the jshint tool helps keep your javascript well formed and correct. IDE's like Webstorm from jetbrains.com can load the .jshintrc file to help all devs on project use the same formatting in the same project.
    Gruntfile - grunt is a general purpose task runner that aids development of web apps. Grunt can min/uglify your javascript, run jshint as part of your deploy process, run unit tests with karma/jasmine, resize images, make icons, basically anything you want to do when you release or build your webapp.
    karma* - testing framework configuration

The yo/bower/grunt/karma toolkit modifies and creates files in the app folder. As I used yo I took 4 snapshots of the app folder as I developed the app, and wrote down what I had done in a README.md file in each step.

    (step1-run-yo/README.md)[https://github.com/patarleth/angular-step-by-step/tree/master/step1-run-yo]
    (step2-generate-rest-singleton/README.md)[https://github.com/patarleth/angular-step-by-step/tree/master/step2-generate-rest-singleton]
    (step3-add-additional-routes/README.md)[https://github.com/patarleth/angular-step-by-step/tree/master/step3-add-additional-routes]
    (step4-add-headline-team-directives/README.md)[https://github.com/patarleth/angular-step-by-step/tree/master/step4-add-headline-team-directives]

If you diff the step by step folders in this project you can see which files are being modified at each step and how the app is built up.

Using webstorm open each 'step' folder up as a separate project and view index.html to see the app as it evolves. Warning ;), Nothing is visually different from step 3 to step 4 as directives are added to organized your views.
