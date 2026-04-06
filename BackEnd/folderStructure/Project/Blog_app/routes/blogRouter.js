import express from 'express';
import { createBlog } from '../controller/createBlog.js';
import { getAllPost } from '../controller/getAllPost.js';
import { getPostById } from '../controller/getPostById.js';
import { likeController } from '../controller/like.js';
import { dislikeController } from '../controller/unlike.js';
import { commentsController } from '../controller/comment.js';



const router = express.Router();

router.post("/createblog" , createBlog);
router.get("/posts" , getAllPost);
router.get("/post/:id" , getPostById );
router.put("/like/:id" , likeController);
router.put("/dislike/:id" , dislikeController);
router.put("/comment/:id" , commentsController)
export default router;