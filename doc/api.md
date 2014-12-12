LocomotiveCMS API
=================

Tokens
------

```
$ curl -d 'email=<EMAIL>&<PASSWORD>=secret' 'http://<ADDRESS>:<PORT>/locomotive/api/tokens.json'
```

Current site
------------

```
$ curl 'http://<ADDRESS>:<PORT>/locomotive/api/current_site.json?auth_token=<AUTH_TOKEN>'
```

Pages
-----

```
$ curl 'http://<ADDRESS>:<PORT>/locomotive/api/pages.json?auth_token=<AUTH_TOKEN>'
```