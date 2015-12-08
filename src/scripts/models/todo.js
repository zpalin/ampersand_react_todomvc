// We're using 'ampersand-state' here instead of 'ampersand-model'
// because we don't need any of the RESTful
// methods for this app.
var AmpersandState = require('ampersand-state');


module.exports = AmpersandState.extend({
  // Properties this model will store
  props: {
    id: {
      type: 'string',
      required: true,
      default: () => {
        function S4() {
          return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        }
        return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
      }
    },
    title: {
      type: 'string',
      default: ''
    },
    completed: {
      type: 'boolean',
      default: false
    }
  },
  // session properties work the same way as `props`
  // but will not be included when serializing.
  session: {
    editing: {
      type: 'boolean',
      default: false
    }
  },
  
  toggle () {
    this.completed = !this.completed;
  },

  destroy () {
    if (this.collection) {
      this.collection.remove(this);
    }
  }
});