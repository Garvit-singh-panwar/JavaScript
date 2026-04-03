import express from 'express'
import {createTodo} from '../controller/createTodo.js';
import {getTodo} from '../controller/getTodo.js'
import { getTodoById } from '../controller/getTodo.js';
import { UpdataTodo } from '../controller/updateTodo.js';
import { deleteTodo } from '../controller/deleteTodo.js';

const router = express.Router();

// define Api routes
router.post("/createTodo" , createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodo/:id" , getTodoById);
router.put("/updateTodo/:id" , UpdataTodo);
router.delete("/deleteTodo/:id" , deleteTodo);
export default router;
