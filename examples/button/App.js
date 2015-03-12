var React = require('react');
var Count = require('../../lib/Count');
var OnlineCount = require('../../lib/OnlineCount');

var App = React.createClass({

  render: function(){
    return (
      <div>
        <h2>Use Count component</h2>
        <div>
          <h3>Multiple votes counter demo</h3>
          <Count counterText="followers" actionDoText="follow" actionDoneText="followed" allowMultiple={true} firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='followers-counter'/>
        </div>
        <div>
          <h3>One vote counter demo</h3>
          <Count actionDoText="do" actionDoneText="done" counterText="kudos" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='kudos-counter'/>
        </div>
        <div>
          <h3>View counter demo</h3>
          <Count isViewCounter={true} counterText="views" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='views-counter'/>
        </div>
        <div>
          <h3>Online counter demo</h3>
          <Count isOnlineCounter={true} counterText="views" firebaseHost="https://counter-button.firebaseio.com/"/>
        </div>
        <div>
          <h3>Readonly counter demo</h3>
          <Count isReadonly={true} counterText="users" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='kudos-counter'/>
        </div>
        <div>
          <h3>Undoable counter demo</h3>
          <Count isButtonLast={true} isUndoable={true} actionDoText="follow" actionUndoText="unfollow" counterText="followers" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='kudos-counter'/>
        </div>
        <div>
          <h3>Custom CSS classname counter demo</h3>
          <Count className="my-classname" counterText="followers" actionDoText="follow" actionDoneText="followed" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='kudos-counter'/>
        </div>
        <h2>Use custom components</h2>
        <div>
          <h3>OnlineCount demo</h3>
          <OnlineCount counterText="views" firebaseHost="https://counter-button.firebaseio.com/"/>
        </div>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)