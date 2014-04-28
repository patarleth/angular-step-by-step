Step by step example using yeoman, generating a SPA
===================================================

[SPA - single page application](http://en.wikipedia.org/wiki/Single-page_application)

pre-reqs - This tutorial assumes you are using a unix'ish box or a mac, you will need
* a commandline compiler toolchain (gcc etc.)
* nodejs.org (current release)
* yeoman.io
* and the yeoman angular generator https://github.com/yeoman/generator-angular

If you are on a window box (any flavor honestly) I HIGHLY recommand you learn how to use a virtual machine management tool like vagrant (http://www.vagrantup.com/downloads.html) to set an Ubuntu box up.  Vagrant is super easy to use and lets you spin up and down vms for each project.

Even if you don't end up installing the [yeoman](http://yeoman.io) tools (here on just refered to as yo), this tutorial can still be helpful, to see what yo generates for you to type by hand. Basically all yo does is create text files in the app folder to speed up angular dev time.  If you don't mind typing in each file, feel free to ignore yo.

Sooooooooooo - what is all this cr4p? Here are the highlights -

* app/ - angular js application and dependencies installed using bower.
* test/ - unit and integration tests go here
* bower.json - javascript dependencies and versioning for your project
* .bowerrc - when/if you run bower install (bower is a tool that is part of yeoman), the bowerrc file defines where to put the dependencies.
* .jshintrc - jshint rules. the jshint tool helps keep your javascript well formed and correct. IDE's like Webstorm from jetbrains.com can load the .jshintrc file to help all devs on project use the same formatting in the same project.
* Gruntfile - configuration file used by [grunt](gruntjs.com) configuring a general purpose task runner which aids development of web apps.
* grunt (as configured) does a number of things - <pre>
    min/uglify your javascript
    run jshint as part of your deploy process
    run unit tests with karma/jasmine
    resize images
    make icons
    basically anything you want to do when you release or build your webapp.</pre>
* karma* - testing framework configuration files.

As you use the yo/bower/grunt/karma toolset, yo modifies and creates files in the app/ folder. As I used the tool to dev my silly sample app, I took 4 snapshots of the app folder. I added a README.md each time I paused dev'ing

* [step1-run-yo/README.md](https://github.com/patarleth/angular-step-by-step/tree/master/step1-run-yo)
* [step2-generate-rest-singleton/README.md](https://github.com/patarleth/angular-step-by-step/tree/master/step2-generate-rest-singleton)
* [step3-add-additional-routes/README.md](https://github.com/patarleth/angular-step-by-step/tree/master/step3-add-additional-routes)
* [step4-add-headline-team-directives/README.md](https://github.com/patarleth/angular-step-by-step/tree/master/step4-add-headline-team-directives)

Just diff the step by step folders to see which files are being modified at each step and how the app is built up.

I highly recommend using [webstorm 8](http://www.jetbrains.com/webstorm/) and open each 'step' folder up as a separate project.  Then use webstorm and view index.html to see the app as it evolves. Warning ;), Nothing is visually different from step 3 to step 4 as directives are added to organized your views.
