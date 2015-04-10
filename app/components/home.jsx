var React = require("react")
var Axios = require('axios')
var {get, post} = Axios

var TodoItem = require('./item')
var BlankItem = require('./blankItem')

var Home = React.createClass({
  getInitialState() {
    return {
      todos: []
    }
  },

  componentDidMount() {
    get('/api/todos').then((datr) => {
      if (datr.data) {
        this.setState({
          todos: datr.data
        })
      }
    }).catch((err) => {
      console.log(err)
    })
  },

  add(item) {
    Axios({
      url: '/api/todos',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(item)
    })
    .then((res) => {
      if (res.data.success) {
        item._id = res.data._id
        var todos = this.state.todos
        todos.push(item)
        this.setState({
          todos
        })
      } else {
        console.log('airhor')
      }
    })
    .catch((airhor) => {
      console.log(airhor)
    })
  },

  remove(i) {
    var todo = this.state.todos[i];
    Axios.delete('/api/todos/' + todo._id)
    .then((datr) => {
      console.log(datr)
      var todos = this.state.todos;
      todos.splice(i, 1)
      this.setState({
        todos
      })
    }).catch((err) => {
      console.log(err)
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