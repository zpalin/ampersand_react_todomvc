var React = require('react');
var ReactDOM = require('react-dom');
var app = require('ampersand-app');
var ampersandMixin = require('ampersand-react-mixin');

module.exports = React.createClass({
  mixins: [ampersandMixin],

  displayName: 'TodoItem',

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render () {
    const {todo} = this.props;

    return (
      <li>
        <div className="view">
          <input 
            type="checkbox" 
            className="toggle"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button className="destroy" onClick={todo.destroy}/>
        </div>
      </li>
    )
  }
})
