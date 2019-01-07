const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

const sequelize = new Sequelize({
  database: 'final_project',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
  }
});

const Post = sequelize.define('post', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT
});

const User = sequelize.define('user', {
    user_name: Sequelize.STRING,
    access_level: Sequelize.INTEGER, // this wold be a number between 1-3 low-high
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

User.beforeCreate(async (user, options) => {
    const password_encrypted = await bcrypt.hashSync(user.password);
    user.password = password_encrypted;
});

Post.belongsTo(User, {through: 'users_posts'});
// User.hasMany(Post, {through: 'users_posts'});

module.exports = {
    sequelize,
    User,
    Post 
}