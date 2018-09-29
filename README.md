[![Build Status](https://travis-ci.com/aleengo/doggyx.svg?branch=master)](https://travis-ci.com/aleengo/doggyx)

# doggyx
Porn dot com wrapper

# Installation
`npm install --save @aleengo/doggyx`

# Documentation

- [videos](#videos)
- [actors](#actors)
- [channels](#channels)
- [dvds](#dvds)
- [categories](#categories)

## Videos

* `search(params)`

* `isActive(params)`

### Parameters

| API Param | Expected values | Default | Description |
|-----------|-----------------|---------|-------------|
| page      | number          | 1       | Page number |
| limit     | number          | 50      | Number of results returned|
| order     | date, views, rating, favorites| date | Results order |
| id        | number | null | Unique video ID |
| cats      | string | null | Comma-separated list of categories to filter by |
| channel   | string | null | Channel name to filter by |
| search    | string | null | Free-form search string |
| thumbs    | all, large, medium, small | null | If set, result includes a list of extra thumbs |

#### Examples

```javascript
  const porn = require('@aleengo/doggyx');
  porn.videos.search()
    .then( res => res.data )
    .then( videos => console.log(videos))
    .catch( err => err );
```

## actors

* `search(params)`

### Parameters

| API Param | Expected values | Default | Description |
|-----------|-----------------|---------|-------------|
| page      | number          | 1       | Page number |
| limit     | number          | 50      | Number of results returned|
| order     | date, views, rating, favorites| date | Results order |
| name      | string | null | Name of the actor to retrieve |
| sex   | male, female, trans | female | Actors' gender to filter by |

#### Examples

```javascript
  const porn = require('@aleengo/doggyx');
  porn.actors.search()
    .then( res => res.data )
    .then( actors => console.log(actors))
    .catch( err => err );
```

## channels

* `search(params)`

### Parameters

| API Param | Expected values | Default | Description |
|-----------|-----------------|---------|-------------|
| page      | number          | 1       | Page number |
| limit     | number          | 50      | Number of results returned|
| order     | date, views, rating, favorites| date | Results order |
| name      | string | null | Name of the channel to retrieve |
| cats      | string | null | Comma-separated list of categories to filter by |

#### Examples

```javascript
  const porn = require('@aleengo/doggyx');
  porn.channels.search()
    .then( res => res.data )
    .then( channels => console.log(channels))
    .catch( err => err );
```

## dvds

* `search(params)`


### Parameters

| API Param | Expected values | Default | Description |
|-----------|-----------------|---------|-------------|
| page      | number          | 1       | Page number |
| limit     | number          | 50      | Number of results returned|
| order     | date, views, rating, favorites| date | Results order |
| name      | string | null | Name of the channel to retrieve |
| cats      | string | null | Comma-separated list of categories to filter by |

#### Examples

```javascript
  const porn = require('@aleengo/doggyx');
  porn.dvds.search()
    .then( res => res.data )
    .then( dvds => console.log(dvds))
    .catch( err => err );
```

## categories

* `search()`

#### Examples

```javascript
  const porn = require('@aleengo/doggyx');
  porn.categories.search()
    .then( res => res.data )
    .then( categories => console.log(categories))
    .catch( err => err );
```

# License
GNU GPLv3 - &copy; aleengo
