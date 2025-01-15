```javascript
//Incorrect usage of $inc operator in MongoDB
db.collection.updateOne({"_id":ObjectId("651234567890")},{$inc:{incorrectField:"1"}});
```