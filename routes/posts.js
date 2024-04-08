const {Router, urlencoded} = require('express')
const {db} = require('../model/db');
const { createNewPost, findAllPost} = require('../controller/postController');
const route = Router();
route.use(urlencoded({extended:true}))


route.post('/',  async (req, res)=>{
    const username = req.body.username;
    const title = req.body.title;
    const postData = req.body.postData;
    const post = await createNewPost(username, title, postData);
    db.sync()
    res.status(200).send(post);
})


route.get('/', async (req, res)=>{
    const posts = await findAllPost();
    res.status(200).send(posts);
})


module.exports = {
    postRoute : route,
}