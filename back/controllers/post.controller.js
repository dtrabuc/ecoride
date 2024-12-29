const PostModel = require('../models/User');  

module.exports.setPosts = async (req, res) => {
    if(!req.body.message) {
        res.status(400).json({message: "Le message est obligatoire"});
    }

    const post = await PostModel.create({
        message: req.body.message,
        author: req.body.author,
    })
    res.status(200).json(post);
};