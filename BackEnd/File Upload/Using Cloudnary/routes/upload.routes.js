import express from "express";

import { localFileUpload } from "../controllers/localFileUpload.controller.js";

export const upload = express.Router();

upload.post("/localFileUpload",localFileUpload);

export default upload;