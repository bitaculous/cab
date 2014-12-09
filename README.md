[Cab]
=====

**The surface of [LocomotiveCMS], written in [Ember.js].**

Installation
------------

### Requirements

1. Install [Node Version Manager]

2. Add the local binaries folder (`./node_modules/.bin`) to your `$PATH` environment variable

  ```
  PATH=./node_modules/.bin:$PATH
  ```

  For more information see [Using npm like Bundler].

3. Install [Watchman]

  ```
  $ brew install watchman

  or

  $ port install watchman
  ```

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

[Cab]: https://github.com/bitaculous/cab "The surface of LocomotiveCMS, written in Ember.js."
[Ember.js]: http://emberjs.com "A framework for creating ambitious web applications."
[here]: https://github.com/bitaculous/cab/issues "Github Issues"
[LICENSE]: https://raw.githubusercontent.com/bitaculous/cab/master/LICENSE "License"
[LocomotiveCMS]: http://locomotivecms.com "An open source CMS for Rails"
[MIT License (MIT)]: http://opensource.org/licenses/MIT "The MIT License (MIT)"
[Node Version Manager]: https://github.com/creationix/nvm "Node Version Manager"
[Using npm like Bundler]: http://nebulab.it/blog/using-npm-like-bundler "Using npm like Bundler"
[Watchman]: https://facebook.github.io/watchman/ "A file watching service"