const express = require ("express")
const app = express()
const userModel = require('./models/user')
const postModel = require("./models/post")

app.get("/",(req,res)=>{
    res.send("data")
})
app.get("/create", async(req,res)=>{
   let user = await userModel.create({
        username: "Nasir",
        age: 25,
        email: "nasird10@gmail.com"
    })
    res.send(user)
})
app.get("/post/create", async(req,res)=>{
   let post = await postModel.create({
    postdata: "hello sary log kesy ho",
    user: "6a35eb7686d7944bd1f99617"
   })
 let user = await userModel.findOne({_id:"6a35eb7686d7944bd1f99617"})
   user.post.push(post._id)
   await user.save()
   res.send({post,user})
})
app.listen(3000)