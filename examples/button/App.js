var React = require('react');
var Count = require('../../lib/Count.js');

var App = React.createClass({

  render: function(){
    return (
      <div>
        <Count firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter4'/>
        <Count text="followers" allowMultiple={true} firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter6'/>
        <Count text="kudos" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter7'/>
        <Count isHoverable={true} text="likes" firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter7'/>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)