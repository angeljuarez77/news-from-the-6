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
app.post('/', async (req, res) => {
    try {
        const attempt = await User.findAll({
            where: {
            email: req.body.email
        }});
       const userresp = attempt[0].dataValues;
       const validation = bcrypt.compareSync(req.body.password, userresp.password);
       const { user_name, password, access_level } = userresp;
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

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));