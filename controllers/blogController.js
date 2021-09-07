const uniqid = require("uniqid");
const dotenv = require('dotenv');
const sendResponse = require("../utils/sendResponse");
const Blog = require("../models/blogModel");
const { errorHandler } = require("../utils/errorResponse");
const {getImageURI}=require("./multerImageController");
const {uploader}=require("../config/cloudinaryConfig");

dotenv.config({path:"./config.env"});

const getAllBlogs = async (req,res,next)=>{
    try{
        let data = Blog.find()
        if(!data){
            next(errorHandler.notFound(res,`Data not found.`));
            return
          }
          return sendResponse({res:res,statusCode:200,message:"Data fetched",data:await data});
    }
    catch(err){
        next(errorHandler.serverError(res,err))
    }
    
} 

const getBlogById = async(req,res,next)=>{
    try{
        let {blogId}=req.params;
        let data = await Blog.findOne({blogId:blogId});
        if(!data){
            next(errorHandler.notFound(res,`The Blog ID ${req.params.blogId} was not found.`))
            return;
        }
        return sendResponse({res:res,statusCode:200,message:"Data fetched",data:await data});
    }
    catch(err){
        next(errorHandler.serverError(res,err))
    }
    
  
  }

  const createBlog = async (req, res, next) => {
    let blogImage = undefined;
   
    let{author,title,content,tags,relatedLinks}=req.body;
    relatedLinks=JSON.parse(relatedLinks)
    try{
        if(process.env.STORAGE == "database" && req.file){
            let file = (await getImageURI(req)).content;
            blogImage = (await uploader.upload(file)).url;
        }
        else{
            blogImage= req.file.originalname
        }
        let data = await Blog.create({
            blogId:uniqid(),
            author:author,
            blogTitle:title,
            blogContent:content,
            createdAt:Date.now(),
            tags:tags,
            blogImage:blogImage ,
            relatedLinks:relatedLinks,
        });
        if(!data){
            next(errorHandler.notFound(`The Blog ID ${req.params.blogId} not found.`));
            return;
        }
        return sendResponse({res:res,statusCode:201,message:"Data created",data: data});
    }
    catch(err){
        next(errorHandler.badRequest(res,"Provide all the keys"));
      }
    
}

  const deleteBlog = async(req,res) =>{
    try{
        let imageId = "";
        let {blogId} = req.params;
        let data = await Blog.findOne({blogId:blogId});
        
        if(process.env.STORAGE==="database"){
            let img=data.blogImage.split('.').slice(0, -1).join('.');
            imageId = img.split('/').pop(); 
        }
        else{
            imageId =data.blogImage
        }
        
       let photo=await uploader.destroy(imageId, function(result) { console.log(result) });
      
        if(!data || !photo){
            next(errorHandler.notFound(`The Blog ID ${req.params.blogId} not found.`));
            return
       }
       
       Blog.deleteOne({blogId:blogId})
       return sendResponse({res:res,statusCode:204,message:"Data deleted"})
    }
    catch(err){
        next({});
    }

     
 }


const updateBlog = async (req, res, next) => {
    let updateKeys = ['blogTitle', 'blogContent', 'author', 'tags', 'relatedLinks'];
    const updates = {};
    try{
	Object.keys(req.body).forEach((key) => {
		if (updateKeys.includes(key)) {
            if(key === 'relatedLinks'){
                updates[key] = JSON.parse(req.body[key]);    
                return;
            }
			updates[key] = req.body[key];
           
		}
	});
       if(process.env.STORAGE === "database" && req.file){
            let file = (await getImageURI(req)).content;
            blogImage = (await uploader.upload(file)).url;
            updates.blogImage = blogImage;
        }
       else{
            updates.blogImage = req.file.originalname;     
       }

       
        let data = await Blog.findOneAndUpdate({blogId: req.params.blogId}, updates, {
            new: true,
            runValidators: true
        });
          
        if(!data){
            next(errorHandler.notFound(res,`${req.params.blogId} not found`));
            return
        }

    return sendResponse({res:res,statusCode:200,message:"Data updated",data: data});
    }
    catch(err){
        if(err.name === 'ValidationError'){
            next(errorHandler.badRequest(err.message));
            return;
        }
        next(errorHandler.internalError(err.message));
    }

}

 module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    deleteBlog,
    updateBlog,
}