const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');
const validator = require('validator');

const blackListedEmailDomains = ['gmail.com']
//create a schema

const authorSchema = new mongoose.Schema({
  fullName : { type: String, required: [true, "Author's full name is required"], maxLength:25},
  email : { type: String, required: true, unique: true, maxLength:50,
    validate:{
       validator: (value) => {return validator.isEmail(value,{host_blacklist: blackListedEmailDomains});},
        message: props =>{
          if(props.value.includes("gmail.com")) 
            return `${props.value} is a personal email address. Please use your business email address.`
          return `${props.value} is not a valid email address.`
        }
    }},
  twitterHandle : String,
  image : {
    type: String,
    validate:{
      validator: (value) => {return validator.isURL(value, {protocols:["https"]});},
      message: props =>{return `${props.value} is not a valid URL.`}
   }}
  },
  {
  _id:false,
})

const blogSchema = new mongoose.Schema(
    // {
    //   title: String,
    //   content: String,
    //   author: [String],
    //   publishedAt: Date,
    // },
    {
      title: { type: String, required: true, unique: true },
      author: { type: [authorSchema] },
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

