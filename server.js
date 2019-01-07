const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const { passport, sign } = require('./auth');
const { Post, User } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));
// this is the user signing in to our web app
app.post('/', async (req, res) => {
    try {
        const attempt = await User.findAll({
            where: {
            email: req.body.email
        }});
       const userresp = attempt[0].dataValues;
       const validation = bcrypt.compareSync(req.body.password, userresp.password);
       const { user_name, access_level } = userresp;
       if(validation){
           const jwt = sign({
               user_name,
               access_level
           });
           res.json({ jwt });
       } else { 
           res.json({message: "You got it wrong!"})
       }
    } catch (e) { console.log(e) }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json({ users });
    } catch (e) {console.log(e)}
});
// for a new user account creation
app.post('/users', async (req, res) => {
    try {
        const user = req.body;
        await User.create(user);
        const { user_name, email, access_level } = user;
        const token = sign({
            user_name, 
            email,
            access_level
        })
        res.json({ user, token });
    } catch (e) {console.log(e)}
});

// Full CRUD for posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json({ posts });
    } catch(e){
        console.log(e);
    }
});
app.get('/post/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        res.json({post});
    } catch(e){
        console.log(e);
    }
});
// doesn't completely work. I would have to finish the associations in my db first
app.get('/posts/:jid', async (req, res) => {
    try {
        const specificPosts = await Post.findAll({
            where: {
                user_id: req.params.jid
           }
        });
        res.json({ specificPosts });
    } catch(e) {
        console.log(e);
    }
});
app.post('/posts', async (req, res) => {
 try {
    await Post.create(req.body);
 } catch (e){
     console.log(e);
 }
})
app.put('/post/:id', async (req, res) => {
    try {
        let post = await Post.findByPk(req.params.id);
        if (!!req.body.title && !!req.body.content){
            // if both are being changed
            await post.update({
                title: req.body.title,
                content: req.body.content
            });
            res.json(post);
        } else if (!!req.body.content){
            // if content is being changed
            await post.update({content: req.body.content});
            res.json(post)
        } else if (!!req.body.title){
            // in case only the title is being changed
            await post.update({title: req.body.title});
            res.json(post)
        }
    } catch(e) {
        console.log(e);
    }
});
app.delete('/posts/:id', async (req, res) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ message: `post with id ${req.params.id} deleted`});
    } catch(e) {
        console.log(e);
    }
});
// for the admins
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));