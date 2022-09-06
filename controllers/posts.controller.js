const getPost = (req, res) => {
  res.status(200).send(`Post with ID ${req.params.postId} has been retrived`);
};

const getPosts = (req, res) => {
  res.status(200).send(`Get all posts filtered by "${req.query.title}" `);
};

const createPost = (req, res) => {
  res.status(200).send("Post has been created");
};

const deletePost = (req, res) => {
  res.status(200).send(`Post with ID ${req.params.postId} has been deleted`);
};

const updatePost = (req, res) => {
  res.status(200).send(`Post with ID ${req.params.postId} has been updated`);
};

module.exports = {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
};
