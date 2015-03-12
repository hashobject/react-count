'use strict';

var React = require('react');
var Firebase = require('firebase');

var Kudos = React.createClass({

  propTypes: {
    firebaseHost: React.PropTypes.string.isRequired,
    firebaseResourceId: React.PropTypes.string.isRequired,
    allowMultiple: React.PropTypes.bool,
    isViewCounter: React.PropTypes.bool,
    isReadonly: React.PropTypes.bool,
    counterText: React.PropTypes.string,
    actionText: React.PropTypes.string,
    className: React.PropTypes.string,
  },

  getDefaultProps: function () {
    return {
      allowMultiple: false,
      isViewCounter: false,
      isReadonly: false,
      counterText: '',
      actionText: '',
      className: 'react-count'
    }
  },

  getInitialState:  function () {
    this.lsVotedKey = 'count-' + this.props.firebaseResourceId + '-voted';
    var voted = false;
    if (isLocalStorageOn()) {
      voted = !!localStorage.getItem(this.lsVotedKey);
    }
    return {
      counterValue: 0,
      voted: voted,
      counted: false
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
    if (newValue == null) {
      newValue = 0;
      this.firebase.set(newValue);
    }
    if (this.props.isViewCounter === true && this.state.counted === false) {
      newValue = newValue + 1;
      this.setState({ counted: true });
      this.firebase.set(newValue);
    }
    this.setState({counterValue: newValue});
  },

  isReadonly: function () {
    return this.props.isReadonly === true || this.props.isViewCounter === true;
  },

  isVotable: function () {
    return this.props.allowMultiple === false && this.state.voted;
  },

  handleClick: function () {
    if (this.isReadonly() || this.isVotable()) {
      return;
    }
    var newValue = this.state.counterValue + 1;
    this.firebase.set(newValue);
    this.setState({voted: true});
    if (isLocalStorageOn()) {
      localStorage.setItem(this.lsVotedKey, true);
    }
  },

  buildClassName: function () {
    var className = this.props.className;
    if (this.isReadonly()) {
      className += ' readonly';
    }
    if (this.state.voted === true) {
      className += ' voted';
    }
    // trim leading whitespace
    if (className.trim) {
      className = className.trim();
    }
    return className;
  },

  render: function () {
    var buttonStyle = {};
    if (this.isReadonly()) {
      buttonStyle.display = 'none';
    }
    var className = this.buildClassName();
    var countClassName = this.props.className + '-cnt';
    var btnClassName = this.props.className + '-btn';
    return (
      <div className={className} onClick={this.handleClick}>
        <span className={countClassName}>{this.state.counterValue} {this.props.counterText}</span>
        <button className={btnClassName} style={buttonStyle}>{this.props.actionText}</button>
      </div>
    )
  }

});

function isLocalStorageOn () {
  // this code is borrowed from modernizer
  var mod = 'react-count';
  try {
    localStorage.setItem(mod, mod);
    localStorage.removeItem(mod);
    return true;
  } catch(e) {
    return false;
  }
}

module.exports = Kudos;