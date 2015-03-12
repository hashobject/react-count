var React = require('react');
var Count = require('../../lib/Count.js');

var App = React.createClass({

  render: function(){
    return (
      <div>
        <Count className="button" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter4'/>
        <Count className="follow-button button" counterText="followers" actionText="follow" allowMultiple={true} firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter6'/>
        <Count counterText="kudos" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter7'/>
        <Count isViewCounter={true} counterText="views" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter11'/>
        <Count isReadonly={true} counterText="users" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter8'/>
        <Count counterText="likes" actionText="like" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter7'/>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)