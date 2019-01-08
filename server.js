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

// everything with authentication
app.post('/signin', async (req, res) => {
    try {
        const attempt = await User.findAll({
            where: {
            user_name: req.body.user_name
        }});
       const userresp = attempt[0].dataValues;
       const validation = bcrypt.compareSync(req.body.password, userresp.password);
       const { user_name, access_level } = userresp;
       if(validation){
           const jwt = sign({
               user_name,
               access_level
           });
           if(access_level === 1){
            res.json({ jwt, view: 'loggedinnorm' });
           } else if (access_level === 2){
               res.json({jwt, view: 'loggedinjourny'})
           } else if(access_level === 3){
               res.json({jwt, view: 'loggedinadmin'})
           }
       } else { 
           res.json({message: "You got it wrong!"})
       }
    } catch (e) { console.log(e) }
});
// here I am trying to require a jwt
app.get('/users', passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
        const users = await User.findAll();
        res.json({ users });
    } catch (e) {console.log(e)}
});
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
app.post('/posts', passport.authenticate('jwt', {session: false}), async (req, res) => {
 try {
    // read jwt and find their access level if access level === 2 then they could go ahead. If not then rejection
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