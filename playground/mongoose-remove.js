const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
  // console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove({_id: '5be3506813bd154886207cd9'}).then((todo) => {
  
// });

Todo.findByIdAndRemove('5be3506813bd154886207cd9').then((todo) => {
  console.log(todo);
});