var React = require('react');
var ReactDOM = require('react-dom');
var app = require('ampersand-app');
var ampersandMixin = require('ampersand-react-mixin');

var TodoItem = require('./components/todoItem.jsx');

module.exports = React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Layout',

  propTypes: {
    me: React.PropTypes.object.isRequired
  },

  handleSubmitNewTodo (event) {
    event.preventDefault();
    var val = this.refs.newField.value.trim();

    if (val) {
      this.props.me.todos.add({title: val});
      this.refs.newField.value = "";
    }
  },

  render () {
    const {me} = this.props;

    var todoItems = me.todos.map( (todo) => {
      return (
        <TodoItem key={todo.id} todo={todo}/>
      );
    }, this);

    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={this.handleSubmitNewTodo}>
            <input
              ref="newField"
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus={true}
            />
          </form>
        </header>
        <section className="main">
            <input
              className="toggle-all"
              type="checkbox"
              onChange={this.toggleAll}
              checked={me.activeTodoCount === 0}
            />
            <ul className="todo-list">
              {todoItems}
            </ul>
          </section>
        
      </div>
    )
  }
})
