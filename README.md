[Cab]
=====

**The user interface of [LocomotiveCMS], written in [Ember.js] with [Ember CLI].**

[![Travis CI Status][Travis CI Status]][Travis CI]
[![Gemnasium Status][Gemnasium Status]][Gemnasium]

![Akita Shinkansen E6 Super Komachi / スーパーこまち by Jun Seita]

*[Photo] by [Jun Seita]*

Prerequisites
-------------

### [Node.js]

1. Install [Node Version Manager]

2. Add the local binaries folder (`./node_modules/.bin`) to your `$PATH` environment variable

  ```
  export PATH="./node_modules/.bin:$PATH"
  ```

  For more information see [Using npm like Bundler].

### [Watchman]

**Installing from source:**

```
$ git clone https://github.com/facebook/watchman.git
$ cd watchman
$ ./autogen.sh
$ ./configure
$ make
$ sudo make install
```

**On OS X:**

```
$ brew install watchman

or

$ port install watchman
```

For more information see [Watchman Installation].

Installation
------------

1. Clone repository

  ```
  $ git clone git@github.com:bitaculous/cab.git
  ```

2. Change into the new directory

  ```
  $ cd cab
  ```

3. Install dependencies

  ```
  $ npm install && bower install
  ```

Running / Development
---------------------

1. Run `ember server`

  Proxy all AJAX requests to a given address, ideally a running LocomotiveCMS engine:

  ```
  $ ember server --proxy http://<ADDRESS>:<PORT>

  $ ember server --proxy http://webby.locoroco.com:8080
  ```

2. Open your browser at [http://localhost:4200] or [http://localhost:4200/tests].

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details.

```
$ ember generate <NAME> <OPTIONS>
```

Running Tests
-------------

* `$ ember test`
* `$ ember test --server`

Building
--------

* `$ ember build` (development)
* `$ ember build --environment production` (production)

Further Reading / Useful Links
------------------------------

* [Ember.js]
* [Ember CLI]

### Development Browser Extensions

* [Ember Inspector for Chrome]
* [Ember Inspector for Firefox]

Credits
-------

### Cap uses the following libraries:

#### Ember CLI

* [Ember CLI CoffeeScript]
* [Ember CLI Document Title]
* [Ember CLI Emblem]
* [Ember CLI Mocha]
* [Ember CLI Simple Auth Devise]

Bug Reports
-----------

Github Issues are used for managing bug reports and feature requests. If you run into issues, please search the issues
and submit new problems [here].

Versioning
----------

This project aims to adhere to [Semantic Versioning 2.0.0]. Violations of this scheme should be reported as bugs.
Specifically, if a minor or patch version is released that breaks backward compatibility, that version should be
immediately yanked and / or a new version should be immediately released that restores compatibility.

License
-------

Cab is released under the [MIT License (MIT)], see [LICENSE].

[Akita Shinkansen E6 Super Komachi / スーパーこまち by Jun Seita]: https://farm9.staticflickr.com/8545/8606149970_78b737582b_z.jpg "Akita Shinkansen E6 Super Komachi / スーパーこまち by Jun Seita"
[Cab]: https://github.com/bitaculous/cab "The user interface of LocomotiveCMS, written in Ember.js with Ember CLI."
[Ember CLI]: http://www.ember-cli.com "A command line utility for creating ambitious web applications"
[Ember CLI CoffeeScript]: https://github.com/kimroen/ember-cli-coffeescript "CoffeeScript support for Ember CLI"
[Ember CLI Document Title]: https://github.com/kimroen/ember-cli-document-title "Sane Document Title"
[Ember CLI Emblem]: https://github.com/jkatsnelson/ember-cli-emblem "Emblem support for Ember CLI"
[Ember CLI Mocha]: https://github.com/switchfly/ember-cli-mocha "Mocha / Chai testing for your Ember CLI apps."
[Ember CLI Simple Auth Devise]: https://github.com/simplabs/ember-cli-simple-auth-devise "Ember CLI Simple Auth Devise"
[Ember Inspector for Chrome]: https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi "Ember Inspector for Chrome"
[Ember Inspector for Firefox]: https://addons.mozilla.org/en-US/firefox/addon/ember-inspector "Ember Inspector for Firefox"
[Ember.js]: http://emberjs.com "A framework for creating ambitious web applications."
[Gemnasium]: https://gemnasium.com/bitaculous/cab "Cab at Gemnasium"
[Gemnasium Status]: https://img.shields.io/gemnasium/bitaculous/cab.svg?style=flat "Gemnasium Status"
[here]: https://github.com/bitaculous/cab/issues "Github Issues"
[http://localhost:4200]: http://localhost:4200
[http://localhost:4200/tests]: http://localhost:4200/tests
[Jun Seita]: https://www.flickr.com/photos/jseita "Jun Seita, on Flickr"
[LICENSE]: https://raw.githubusercontent.com/bitaculous/cab/master/LICENSE "License"
[LocomotiveCMS]: http://locomotivecms.com "An open source CMS for Rails"
[MIT License (MIT)]: http://opensource.org/licenses/MIT "The MIT License (MIT)"
[Node.js]: http://nodejs.org "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications."
[Node Version Manager]: https://github.com/creationix/nvm "Node Version Manager"
[Photo]: https://www.flickr.com/photos/jseita/8606149970 "Photo"
[Travis CI]: https://travis-ci.org/bitaculous/cab "Cab at Travis CI"
[Travis CI Status]: https://img.shields.io/travis/bitaculous/cab.svg?style=flat "Travis CI Status"
[Using npm like Bundler]: http://nebulab.it/blog/using-npm-like-bundler "Using npm like Bundler"
[Watchman]: https://facebook.github.io/watchman/ "A file watching service"
[Watchman Installation]: https://facebook.github.io/watchman/docs/install.html "Watchman Installation"