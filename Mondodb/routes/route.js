import e from "express";
import {
  createPost,
  getpost,
  getSinglePost,
  update,
  deleteby,
} from "../controllers/post.js";

const router = e.Router();
router.post("/createPost", createPost);
router.get("/getAll", getpost);
router.get("/get/:id", getSinglePost);
router.put("/updatePost/:id", update);
router.delete("/delete/:id", deleteby);

export default router;
