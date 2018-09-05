# doggyx
Oprn wrapper

# Install
`npm install --save doggyx`

# Usage
## videos
* `videos.list()`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
```javascript
  const doggyx = require('doggyx');
  doggyx.videos.list({f: value})
    .then( videos => console.log(videos) )
    .catch( err => err );
```

##### output
``` json
[
  {
    "videoId": 1254,
  },
  {
    "videoId": 5787,
  }
]
```

* `videos.search(query)`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
``` javascript
    const doggyx = require('doggyx');
    doggyx.videos.search({q: value})
        .then( video => console.log(video) )
        .catch( err => err );
```

## channels
 * `channels.list()`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

``` javascript
    const doggyx = require('doggyx');
    doggyx.channels.list()
        .then( channels => console.log(channels) )
        .catch( err => err );
```

## categories
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

### categories.list()
``` javascript
    const doggyx = require('doggyx');
    doggyx.categories.list()
        .then( categories => console.log(categories) )
        .catch( err => err );
```

# License
MIT
