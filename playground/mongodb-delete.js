const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log ('Unable to connect to MongoDB Server');
  }
  console.log ('Connected to MongoDB Server');

  // deleteMany
  // db.collection('Todos').deleteMany ({
  //   text: 'Test Todo1'
  // }).then((result) => {
  //   console.log (result);
  // })

  // deleteOne
  // db.collection('Todos').deleteOne ({
  //   text: 'Test todo1'
  // }).then((result) => {
  //   console.log (result);
  // })

  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete ({completed: false}).then((result) => {
  //   console.log (result);
  // })

  //Delete duplicate Users
  // db.collection('Users').deleteMany ({name: 'User2'}).then((result) => {
  //   console.log (result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('59ad4691fe1098623ee3c94d')}).then((result) => {
    console.log (JSON.stringify(result, undefined, 2));
  })
  //db.close();
});
