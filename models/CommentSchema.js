const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the Comment)
const CommentSchema = new Schema({
  Name: String,
  Mail: String,
  TheComment: String,
  Daysstatic : String,
});
// Create a model based on that schema
const Comment = mongoose.model("Comment", CommentSchema);
 
 
// export the model
module.exports = Comment;