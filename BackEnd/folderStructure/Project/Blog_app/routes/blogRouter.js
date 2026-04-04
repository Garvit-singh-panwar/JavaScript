import express from 'express';
import { createBlog } from '../controller/createBlog.js';
import { getAllPost } from '../controller/getAllPost.js';
import { getPostById } from '../controller/getPostById.js';
import { likeBlog } from '../controller/like.js';
import { unlikeBlog } from '../controller/unlike.js';


const router = express.Router();

router.post("/createblog" , createBlog);
router.get("/posts" , getAllPost);
router.get("/post/:id" , getPostById );
router.put("/like/:id" , likeBlog);
router.put("/unlike/:id" , unlikeBlog);
export default router;