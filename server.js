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
app.get('/loggedin', async (req, res) => {
    try { 
        const posts = await Post.findAll();
        res.json({ posts });
    } catch(e){console.log(e)}
});

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
        const { user_name, email } = user;
        const token = sign({
            user_name, 
            email
        })
        res.json({ user, token });
    } catch (e) {console.log(e)}
});


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));