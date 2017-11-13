const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url, {
  useMongoClient: true
});


// connect.then((db) => {
//   console.log('Connect correctly to server');
//
//   var newDish = Dishes({
//     name: 'test',
//     description: 'test description'
//   });
//
//   newDish.save()
//     .then((dish) => {
//       console.log(dish);
//
//       return Dishes.find({}).exec();
//     })
//     .then((dishes) => {
//       console.log(dishes);
//
//       return db.collection('dishes').drop();
//     })
//     .then(() => {
//       return db.close();
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// });

// connect.then((db) => {
//   console.log('Connect correctly to server');
//
//   Dishes.create({
//     name: 'test2',
//     description: 'test description2'
//   })
//   .then((dish) => {
//     console.log(dish);
//     return Dishes.find({}).exec();
//   })
//   .then((dishes) => {
//     console.log(dishes);
//     return db.collection('dishes').drop();
//   })
//   .then(() => {
//     return db.close();
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//
// });


connect.then((db) => {
  console.log('Connect correctly to server');

  Dishes.create({
    name: 'test3',
    description: "test3 description3"
  })
  .then((dish) => {
    console.log(dish);
    return Dishes.findByIdAndUpdate(dish._id, {
      $set: { description: "Updated test" }
    },{
      new: true
    })
    .exec();

  })
  .then((dish) => {
    console.log(dish);
    dish.comments.push({
      rating: 5,
      comment: 'I\'m getting a shrink feeling',
      author: 'mat'
    });
    return dish.save();
  })
  .then((dish) => {
    console.log('dish');

    return db.collection('dishes').drop();
  })
  .then(() => {
    return db.close();
  })
  .catch((err) => {
    console.log(err);
  })

})
