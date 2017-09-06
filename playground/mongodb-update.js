const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log ('Unable to connect to MongoDB Server');
  }
  console.log ('Connected to MongoDB Server');

  //findOneAndUpdate - Todos
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59ad4492fe1098623ee3c8b0')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then ((result) => {
  //   console.log (result);
  // })
  //
  //findOneAndUpdate - Users
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59ad20158f8b290a687117d7')
  }, {
    $set: {
      name: 'Raghav'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then ((result) => {
    console.log (result);
  })

  //db.close();
});
