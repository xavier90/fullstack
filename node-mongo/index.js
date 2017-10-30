const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const dboper = require('./operations')

const url = 'mongodb://localhost:27017/conFusion'

// MongoClient.connect(url, (err, db) => {
//   assert.equal(err, null);
//
//   console.log('Connect correctly to server');
//
//   const collection = db.collection("dishes");
//   collection.insertOne({"name": "test", "description": "test description"},
//                         (err, result) => {
//                           assert.equal(err, null);
//
//                           console.log("After Insert:\n");
//                           console.log(result.ops);
//
//                           collection.find({}).toArray((err, docs) => {
//                             assert.equal(err, null);
//
//                             console.log("Found:\n");
//                             console.log(docs);
//
//                             db.dropCollection("dishes", (err, result) => {
//                               assert.equal(err, null);
//
//                               db.close();
//                             });
//
//                           });
//
//                         });
//
// });


MongoClient.connect(url, (err, db) => {
  assert.equal(err, null);
  console.log('Connect correctly to server');

  dboper.insertDocument(db, {name: "Vadonut", description:"test"}, "dishes",
        (result) => {
          console.log("Insert Document:\n", result.ops);

          dboper.findDocuments(db, "dishes", (docs) => {
            console.log("Found Document:\n", docs);

            dboper.updateDocument(db, {name:"Vadonut"}, {description: "Update Test"}, "dishes",
                  (result) => {
                    console.log("Updated Document:\n", result.result);

                    dboper.findDocuments(db, "dishes", (docs) => {
                      console.log("Found Document:\n", docs);

                      db.dropCollection("dishes", (result) => {
                        console.log("Dropped Collection: ", result);

                        db.close();
                      });
                    });
                  });
          });
        });
});
