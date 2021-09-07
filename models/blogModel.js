const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blogId: {
    type: String,
    required: true,
    unique: true,
  },
  author:{
      type:String, 
      required:true
  },
  createdAt: {
      type:Date,
  },
  tags:{
      type:[String],
  },
  blogTitle: {
    type: String,
    required:[true,"Blog cannot be created without content"],
    minlength:[1,"Title cannot be empty"],
    maxlength:[50,"Title too lengthy"]
  },
  blogContent: {
    type: String,
    required:[true,"Blog cannot be created without content"],
    minlength:[1,"Content cannot be empty"]
  },
  blogImage: {
    type: String,
    required: true, 
  },
 relatedLinks:{
     type:[{
         title:{
             type:String,
             required:true
         },
         href:{
             type:String,
             required:true
         }
     }],
     default:[]
 }
});

const Blog = mongoose.model("blogs", blogSchema);

module.exports = Blog;