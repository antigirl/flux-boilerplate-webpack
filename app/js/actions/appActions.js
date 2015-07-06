var appDispatcher = require('../dispatcher/appDispatcher');
var constants = require('../constants/appConstants');

module.exports = {
  addItem: function(item) {
    appDispatcher.dispatch({
      type: constants.ADD_ITEM,
      item: item
    });
  },

  removeItem: function(item) {
    appDispatcher.dispatch({
      type: constants.REMOVE_ITEM,
      item: item
    });
  }
}
