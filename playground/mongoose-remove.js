const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log (result);
// });

Todo.findByIdAndRemove('59b63b10e4ab722c3b15e171').then((todo) => {
  console.log (todo)
})
