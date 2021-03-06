const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = Schema({
  content: String,
  picPath: String,
  picName: String,
  creatorId: Schema.Types.ObjectId
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
