var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    completed: {
      type: Boolean,
      required: true
    }
  });

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'bundle.js'));
});

app.get('/main.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'main.css'));
});

mongoose.connect('mongodb://localhost/reactToDo');

app.get('/api/todos', function (req, res) {
  Todo.find(function (err, todos) {
    var arrTodos = todos;
    if (err) {
      res.send(500);
    } else {
      res.send(arrTodos);
    }
  });
});

app.post('/api/todos', function (req, res) {
  var todo = new Todo();
  todo.name = req.body.name;
  todo.description = req.body.description;
  todo.completed = req.body.completed;
  todo.save(function (err, todo) {
    if (err) {
      res.send(500);
    } else {
      res.json({success: true});
    }
  });
});

app.delete('/api/todos/:id', function (req, res) {
  var todo = new Todo();
  Todo.remove({_id: req.params.id}, function (err, todo) {
    if (err) {
      res.send(500);
    } else {
      res.json(200, {success: true});
    }
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

http.createServer(app).listen(3000);

console.log('Listening on port 3000.');
