Step by step example using yeoman, generating a SPA
===================================================

[SPA - single page application](http://en.wikipedia.org/wiki/Single-page_application)

pre-reqs - a commandline compiler toolchain (gcc etc.) nodejs.org, yeoman.io, and the yeoman angular generator

Even if you don't end up installing [yeoman](http://yeoman.io) (here on just refered to as yo) and the rest of the toolchain, you can use this tutorial to see what yo does and how yo can help scaffold your angularjs single page web application.

What is all this cr4p? Here are the highlights -

    app/ - angular js application and dependencies installed using bower.
    test/ - unit and integration tests go here
    bower.json - javascript dependencies and versioning for your project
    .bowerrc - when/if you run bower install (bower is a tool that is part of yeoman), the bowerrc file defines where to put the dependencies.
    .jshintrc - jshint rules. the jshint tool helps keep your javascript well formed and correct. IDE's like Webstorm from jetbrains.com can load the .jshintrc file to help all devs on project use the same formatting in the same project.
    Gruntfile - grunt is a general purpose task runner that aids development of web apps. Grunt can min/uglify your javascript, run jshint as part of your deploy process, run unit tests with karma/jasmine, resize images, make icons, basically anything you want to do when you release or build your webapp.
    karma* - testing framework configuration

The yo/bower/grunt/karma toolset modifies and creates files in the app/ folder. I took 4 snapshots of the app folder as I developed this sample app, adding a README.md at each step.

* [step1-run-yo/README.md](https://github.com/patarleth/angular-step-by-step/tree/master/step1-run-yo)
* [step2-generate-rest-singleton/README.md](https://github.com/patarleth/angular-step-by-step/tree/master/step2-generate-rest-singleton)
* [step3-add-additional-routes/README.md](https://github.com/patarleth/angular-step-by-step/tree/master/step3-add-additional-routes)
* [step4-add-headline-team-directives/README.md](https://github.com/patarleth/angular-step-by-step/tree/master/step4-add-headline-team-directives)

Just diff the step by step folders to see which files are being modified at each step and how the app is built up.

I highly recommend using [webstorm 8](http://www.jetbrains.com/webstorm/) and open each 'step' folder up as a separate project.  Then use webstorm and view index.html to see the app as it evolves. Warning ;), Nothing is visually different from step 3 to step 4 as directives are added to organized your views.
