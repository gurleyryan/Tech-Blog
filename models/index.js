const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

// USER can have many BLOGS
User.hasMany(Blog, {
  foreignKey: "user_id",
});

// USER can have many COMMENTS
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// BLOG belongs to a USER
Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// BLOG can have many COMMENTS
Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

// COMMENT belongs to a USER
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// COMMENT belongs to a BLOG
Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

module.exports = { User, Blog, Comment };