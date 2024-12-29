const PostModel = require("../models/post.model");

module.exports.getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    return res.status(400).json({ message: "Merci d'ajouter un message" });
  }

  try {
    const post = await PostModel.create({
      message: req.body.message,
      author: req.body.author,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });

  res.status(200).json(updatePost);
};

module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }
  await post.deleteOne({ _id: post })
  res.status(200).json("Message supprimé " + req.params.id);
};