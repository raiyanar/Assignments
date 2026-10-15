const express = require("express");
const router = express.Router();
const {
  postBlog,
  getAllBlogs,
  getOneBlog,
  deleteOneBlog,
} = require("../services/BlogService");

router.post("/blogs", async (req, res) => {
  await postBlog(req, res);
});

router.get("/blogs", async (req, res) => {
  await getAllBlogs(req, res);
});

router.get("/blogs/:id", async (req, res) => {
  await getOneBlog(req, res);
});

router.delete("/blogs/:id", async (req, res) => {
  await deleteOneBlog(req, res);
});

module.exports = router;
