const mongoose = require('mongoose');
//create a schema
const blogSchema = new mongoose.Schema(
    // {
    //   title: String,
    //   content: String,
    //   author: [String],
    //   publishedAt: Date,
    // },
    {
      title: { type: String, required: true, unique: true },
      author: { type: [String] },
      content: { type: String, default: "" },
      publishedAt: { type: Date, default: null },
    },  
    {
      timestamps: true,
      versionKey: false, // You should be aware of the outcome after set to false
    }
  );

const blogModel = mongoose.model("Blog", blogSchema, "blogs")
//By default the name of collection if not specified, is "Blogs" => "(name of model)" + "s"
// By default, Mongoose will convert the model name to lowercase and pluralize it.
// So, if your model name is "Blog", Mongoose will use blogs (all lowercase) as the collection name.

//(name of model, schema, and collection name)
//Collection will have documents, if we insert into collection it will get inserted as a document.

module.exports = blogModel;

