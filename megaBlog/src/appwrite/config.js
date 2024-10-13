import { Client,Databases,Query,Storage,ID } from "appwrite";
import conf from "../conf/conf";

export class Config{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        .this.databases=new Databases(this.client)
        .this.bucket=new Storage(this.client)
    }

    async  createDocument({title,slug,featuredImage,status,content,userId}){
        try{
            return await this.databases.createDocument(ID.unique(),conf.appwriteCollectionId,slug,{title,featuredImage,status,content,userId})
        }
        catch(error){
            console.error(error)
        }
    }
    async  getPost(slug){
        try{
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
        }
        catch(error){
            console.error(error)
        }
    }
    async  updatedDocument(slug,{title,featuredImage,status,content}){
        try{
            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{title,featuredImage,status,content})
        }
        catch(error){
            console.error(error)
        }
    }
    async  deleteDocument(slug){
        try{
            return await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
        }
        catch(error){
            console.error(error)
        }
    }
    async  getPosts(queries=[Query.equal('status','active')]){
        try{
            return await this.databases.listDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
        }
        catch(error){
            console.error(error)
        }
    }
    async uploadFile(file){
        try{
            return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file)
        }
        catch(error){
            console.error(error)
        }
    }
    async deleteFile(fileId){
        try{
            return await this.bucket(conf.appwriteBucketId,fileId)
        }
        catch(error){
            console.error(error)
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId)
    }

}
const config=new Config();

export default config;
