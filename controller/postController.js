const {Posts, db} = require('../model/db')

async function createNewPost(username, title, postData){
    try{
        const post = Posts.create({
            username : username,
            title: title,
            postData: postData
        })
        return post
    }catch(error){
        console.log(error);
    }
}


async function findAllPost(){
    try{
        const posts = await Posts.findAll();
        return posts;
    }catch(error){
        console.log(error)
    }
}

db.sync()

module.exports = {
    createNewPost, findAllPost
}