var React = require('react');
var Firebase = require('firebase');

var Kudos = React.createClass({

  propTypes: {
    firebaseHost: React.PropTypes.string.isRequired,
    firebaseResourceId: React.PropTypes.string.isRequired,
    allowMultiple: React.PropTypes.bool,
    isHoverable: React.PropTypes.bool,
    text: React.PropTypes.string,
  },

  isLocalStorageOn: function () {
    // this code is borrowed from modernizer
    var mod = 'react-count';
    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch(e) {
      return false;
    }
  },

  getDefaultProps: function () {
    return {
      isButton: false,
      allowMultiple: false,
      text: ''
    }
  },

  getInitialState:  function () {
    this.lsVotedKey = 'count-' + this.props.firebaseResourceId + '-voted';
    var voted = false;
    if (this.isLocalStorageOn()) {
      voted = !!localStorage.getItem(this.lsVotedKey);
    }
    return {
      counterValue: 0,
      voted: voted
    }
  },

  componentWillMount: function () {
    var url = this.props.firebaseHost + this.props.firebaseResourceId;
    this.firebase = new Firebase(url);
  },

  componentDidMount: function () {
    this.firebase.on('value', this.handleFirebaseChange);
  },

  componentWillUnmount: function () {
    this.ref.off('value', this.handleFirebaseChange);
  },

  handleFirebaseChange: function (snapshot) {
    var newValue = snapshot.val();
    console.log('value changed', newValue);
    if (newValue == null) {
      newValue = 0;
      this.firebase.set(newValue);
    }
    this.setState({counterValue: newValue});
  },

  handleClick: function () {
    if (this.props.allowMultiple === false && this.state.voted) {
      return;
    }
    var newValue = this.state.counterValue + 1;
    this.firebase.set(newValue);
    this.setState({voted: true});
    if (this.isLocalStorageOn()) {
      localStorage.setItem(this.lsVotedKey, true);
    }
  },


  render: function () {
    var rendered;
    if (this.props.isHoverable) {
      rendered = <div onClick={this.handleClick}>{this.state.counterValue} <span>{this.props.text}</span></div>;
    } else {
      rendered = <button onClick={this.handleClick}>{this.state.counterValue} {this.props.text}</button>;
    }
    return (
      <div>
        {rendered}
      </div>
    )
  }

});

module.exports = Kudos;