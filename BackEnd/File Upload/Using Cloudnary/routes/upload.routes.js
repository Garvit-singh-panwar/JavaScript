import express from "express";

import { localFileUpload } from "../controllers/localFileUpload.controller.js";
import { imageUpload } from "../controllers/imageUpload.controller.js";

export const upload = express.Router();


upload.post("/localFileUpload",localFileUpload);
upload.post("/imageUpload", imageUpload);
export default upload;