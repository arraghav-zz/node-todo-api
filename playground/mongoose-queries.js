const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');

// var id = '59b134fa622290178894ff50111';
//
// if (!ObjectID.isValid(id)) {
//   console.log ('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log ('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log ('Todo: ', todo);
// });
//
// Todo.findById((id)).then((todo) => {
//   if (!todo) {
//     return console.log ('Id not found');
//   }
//   console.log ('Todo By ID: ', todo);
// }).catch((e) => console.log (e));

var id = '59af50f09910e11bbc1e7519';

User.findById(id).then((user) => {
  if (!user) {
    return console.log ('User not found');
  }
  console.log (JSON.stringify(user, undefined, 2));
}).catch((e) => console.log (e));
