const BlogModel = require("../models/BlogModel");

async function postBlog(req, res) {
  const b = req.body;
  try {
    const newBlog = await BlogModel.create({
      title: b.title,
      description: b.description,
      author: b.author,
    });
    res.status(201).json({ newBlog });
  } catch (err) {
    res.status(500).json({
      message: "Server Error while posting a blog..!",
      error: err.message,
    });
  }
}

async function getAllBlogs(req, res) {
  try {
    const allBlogs = await BlogModel.find({});
    res.status(200).json({ allBlogs });
  } catch (err) {
    res.status(500).json({
      message: "Server Error while getting all blogs..!",
      error: err.message,
    });
  }
}

async function getOneBlog(req, res) {
  const id = req.params.id;
  try {
    const particularBlog = await BlogModel.find({ _id: id });
    if (!particularBlog) {
      res.status(404).json("No blog is found with given ID to show you.");
    }
    res.status(200).json({ particularBlog });
  } catch (err) {
    res.status(500).json({
      message: "Server Error while getting a particular blog..!",
      error: err.message,
    });
  }
}

async function deleteOneBlog(req, res) {
  const id = req.params.id;
  try {
    const deletedBlog = await BlogModel.findByIdAndDelete(id);
    if (!deletedBlog) {
      res.status(404).json("No blog is found with given ID to delete.");
    }
    res.status(200).json({ deletedBlog });
  } catch (err) {
    res.status(500).json({
      message: "Server Error while deleting a particular blog..!",
      error: err.message,
    });
  }
}

module.exports = {
  postBlog,
  getAllBlogs,
  getOneBlog,
  deleteOneBlog,
};
