<p align="center">
	<a href="https://github.com/sevenns/mongolor" title="Weery"><img src="./mongo.png" width="128px"></a>
	<h3 align="center">Mongolor</h3>
</p>

<p align="center">Easy cross-platform run MongoDB server relatively your's projects.</p>

### - Installing

``` bash
npm install mongolor --save-dev
```

### - Using

- Put in root of your project *mongolor.config.js*

``` javascript
// Default MongoDB settings

module.exports = {
  host: 'localhost',
  port: 27017,
  logs: 'db/logs', // Relative path from root
  data: 'db/data' // Relative path from root
}
```

- Setting *package.json*

``` json5
{
  "scripts": {
    // ...
    "db:start": "mongolor start",
    "db:stop": "mongolor stop"
  }
}
```

- Running

``` bash
# start service/daemon
# Note: Windows users must run from the administrator!
$ npm run db:start

# stop service/daemon
# Note: Windows users must run from the administrator!
#       Windows service will be deleted.
$ npm run db:stop
```