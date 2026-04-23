import fileUpload from "express-fileupload";
import File from "../models/file.model.js";
import path from 'path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const localFileUpload = async (req, res) => {
    try {
        const { file } = req.files;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "required file",
            });
        }

        console.log(file);

        // Using path.join is safer than manual string concatenation with \\
        const extension = path.extname(file.name);
        const uploadPath = path.join(__dirname, 'files', `${Date.now()}${extension}`);

        console.log("path -> ", uploadPath);

        // FIX: Use await WITHOUT a callback. 
        // If it fails, it will jump straight to the 'catch' block.
        await file.mv(uploadPath);

        // This line ONLY runs if the 'await' above finishes successfully.
        return res.status(201).json({
            success: true,
            message: "file uploaded successfully",
        });

    } catch (error) {
        console.error("Upload Error:", error);
        // If any error happens (including file.mv), this block handles it.
        // We check 'res.headersSent' to ensure we don't try to send a second response.
        if (!res.headersSent) {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message
            });
        }
    }
};