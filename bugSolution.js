```javascript
//Correct usage of $inc operator in MongoDB
db.collection.updateOne({"_id":ObjectId("651234567890")},{$inc:{correctField:1}});
```