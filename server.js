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
// lets start off by making the routes for the regular users
app.get('/loggedin', async (req, res) => {
    try { 
        const posts = await Post.findAll();
        res.json({ posts });
    } catch (e) {console.log(e)}
});
app.get('/loggedin/:journalistid', async (req, res) => {
  try {
    const posts = await Post.findAll({where: {user_id: req.params.journalistid}});
    res.json({ posts });
  } catch(e) {console.log(e)}
});
// for the journalists
app.get('/loggedin/journalist/myposts', async (req, res) => {
    try {
      res.send('loggedin/journalist/myposts');
    } catch(e) {
        console.log(e);
    }
});
app.post('/loggedin/journalist/posts', async (req, res) => {
    try {
        // take in jwt
        // 
        //  
        await Post.create(req.body);
        res.send(`Post with title ${req.body.title} created.`);
    } catch(e){console.log(e)}
});

// for the admins
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));