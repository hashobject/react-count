var StyleSheet = require('react-style')

module.exports = StyleSheet.create({
  reactCount: {
    height: 20,
    overflow: 'hidden',
    display: 'block'
  },
  reactCountBtn: {
    backgroundColor: '#eee',
    backgroundImage: '-moz-linear-gradient(#fcfcfc, #eee)',
    backgroundImage: '-webkit-linear-gradient(#fcfcfc, #eee)',
    backgroundImage: 'linear-gradient(#fcfcfc, #eee)',
    backgroundRepeat: 'no-repeat',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    fontSize: 13
  },
  reactCountCnt: {
    position: 'relative',
    display: 'block',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d4d4d4',
    fontSize: 12,
    paddingTop: 3
  },
  reactCountBtnCnt: {
    padding: '2px 5px 2px 4px',
    color: '#333',
    textDecoration: 'none',
    textShadow: '0 1px 0 #fff',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    borderRadius: 3,
    transition: 'background-color 200ms ease-in',
    lineHeight: 1,
    float: 'left',
    marginLeft: 4
  }


});

