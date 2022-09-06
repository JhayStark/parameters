const router = require("express").Router;
const {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} = require("../controllers/posts.controller");

const postRouter = router();

postRouter.route("/").post(createPost).get(getPosts);

postRouter.route("/:postId").delete(deletePost).get(getPost).patch(updatePost);

module.exports = postRouter;
