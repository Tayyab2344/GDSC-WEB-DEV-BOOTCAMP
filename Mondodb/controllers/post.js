import post from "../models/post.js";

export const createPost = async (req, res) => {
  const createPost = await post.create(req.body);
  res.status(201).json(createPost);
};

export const getpost = async (req, res) => {
  const getAllPost = await post.find();
  res.status(200).json(getAllPost);
};

export const getSinglePost = async (req, res) => {
  const singlepost = await post.findById(req.params.id);

  res.status(200).json(singlepost);
};

export const update = async (req, res) => {
  const update = await post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(update);
};

export const deleteby = async (req, res) => {
  const deletebyid = await post.findByIdAndDelete(req.params.id);
  res.status(200).json(deletebyid);
};
