var React = require('react');
var Count = require('../../lib/Count.js');

var App = React.createClass({

  render: function(){
    return (
      <div>
        <Count className="button" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter4'/>
        <Count className="follow-button button" text="followers" allowMultiple={true} firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter6'/>
        <Count text="kudos" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter7'/>
        <Count readonly={true} text="users" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter8'/>
        <Count isHoverable={true} text="likes" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter7'/>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)