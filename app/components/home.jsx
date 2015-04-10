var React = require("react")

var TodoItem = require('./item')
var BlankItem = require('./blankItem')

var Home = React.createClass({
  getInitialState() {
    return {
      todos: []
    }
  },

  componentDidMount() {
    this.setState({
      todos: [
        {name: 'Clean Cat', description: 'Just do it'},
        {name: 'Clean Car', description: 'Just do it'},
        {name: 'Clean Cafe', description: 'Just do it'},
      ]
    })
  },

  add(item) {
    var todos = this.state.todos;
    item
    todos.push(item)
    this.setState({
      todos
    })
  },

  remove(i) {
    var todos = this.state.todos;
    todos.splice(i, 1)
    this.setState({
      todos
    })
  },

  render() {
    if (this.state.todos.length === 0) {
      return (
        <div>
          <p>There are no todos</p>
          <BlankItem add={this.add} />
        </div>
      )
    }

    var todoItems = this.state.todos.map((item, id) => {
      return <TodoItem item={item} remove={this.remove} key={id} id={id} />
    })

    return (
      <div>
        { todoItems }
        <BlankItem add={this.add} />
      </div>
    )
  }
})

module.exports = Home