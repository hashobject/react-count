react-count
===========
Real-time counter button [React](http://facebook.github.io/react/) component baked by [Firebase](https://www.firebase.com/).

See demo [here](http://react-count.hashobject.com/).

## Use cases

This component can we useful in the following cases:

  - follow/unfollow button with the showing number of followers
  - like/unlike button with the showing number of likes
  - page views counter
  - counter for the users currently online
  - generic read-only counters hooked up to any numeric data from your Firebase

## Install

If you use webpack just install react-count module

```
  npm install react-count
```

and require it anywhere in your react app:

```
  var Count = require('react-count');
```

or you can use additional more specific components like:

```
  var OnlineCount = require('react-count').OnlineCount;
  var ViewCount = require('react-count').ViewCount;
```

## Demo

You can see online demo [here](http://react-count.hashobject.com/) or you can open `examples/index.html` in your browser locally.
See `examples\App.js` to understand how this component can be used in your React applications.


## Customization

`ViewCount` has 4 properties:

  - firebaseHost - required property where you specify Firebase host. E.x. `https://counter-button.firebaseio.com/`
  - firebaseResourceId - required property where unique counter id. E.x. `article-1-counter`
  - className - CSS classname that will be assigned to the component. This way you'd be able to overwrite styles Optional.
  - counterText - text that will be shown near the counter number


`OnlineCount` has 4 properties:

  - firebaseHost - required property where you specify Firebase host. E.x. `https://counter-button.firebaseio.com/`
  - firebaseResourceId - required property where unique counter id. E.x. `article-1-counter`
  - className - CSS classname that will be assigned to the component. This way you'd be able to overwrite styles Optional.
  - counterText - text that will be shown near the counter number

`Count` has following properties:
  - firebaseHost - required property where you specify Firebase host. E.x. `https://counter-button.firebaseio.com/`
  - firebaseResourceId - required property where unique counter id. E.x. `article-1-counter`
  - className - CSS classname that will be assigned to the component. This way you'd be able to overwrite styles Optional.
  - counterText - text that will be shown near the counter number.
  - allowMultiple - boolean flag that enables increasing counter multiple times by the single user. Default is `false`.
  - isViewCounter - boolean flag that tells component to increase automatically on each view. Default is `false`.
  - isOnlineCounter - boolean flag that tells component to increase automatically on each user online. Default is `false`.
  - isUndoable - boolean flag that enables user to undo his click (follow/unfollow). Default is `false`.
  - isReadonly - boolean flag that disables increasing counter value. Default is `false`.
  - isButtonLast - boolean flag that defines order of text and button. Default is `false`.
  - actionDoText - text shown on button initially.
  - actionUndoText - text shown on button if `isUndoable === true` and user already clicked the button.
  - actionDoneText - text shown on button if `isUndoable === false` and user already clicked the button.


## Firebase security rules

Add following firebase security rules if you want to prevent users from arbitrary changing your counters.
We allow incremental vote submissions:


```
{
    "rules": {
        ".read": true,
        "$counter": {
          ".write": "!root.child($counter).exists() || ((newData.val() - data.val()) === 1) || ((newData.val() - data.val()) === -1)",
          "presence": {
            ".write": true
          }
        }
    }
}
```

## TODO

  - [x] implement undo
  - [x] online users counter
  - [x] create subcomponents
  - [ ] betters styles customization
  - [ ] auth support