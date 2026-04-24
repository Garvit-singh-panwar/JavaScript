import File from "../models/file.model.js";
import path from "path";
import {v2 as cloudnary} from 'cloudinary';

const isValidImageFormat = (image , validExtension)=>{

    const imageExt = path.extname(image.name);
    if(validExtension.includes(imageExt)){
        return true;
    }
    return false;

}

const cloudnaryUpload = async(image,folderName,quality=100)=>{

    const options = {
        folder : folderName,
        resource_type: "auto",
    }
    if(quality){
        options.quality = quality;
    }

    const response = await cloudnary.uploader.upload(image.tempFilePath,options);
    return response;
}


export const imageUpload = async(req,res)=>{
    try {
        
        const {image} = req.files;
        const {name,tags,email} = req.body; 


       

        if(!image||!name||!tags){
            return res.status(400).json(
                {
                    success:false,
                    message: "required all fields"
                }
            );
        }

        const validExtension = [".jpeg",".jpg",".png"];

        if(!isValidImageFormat(image,validExtension)){
            return res.status(400).json(
                {
                    success:false,
                    message: "require valid image format"
                }
            )
        }


        const response = await cloudnaryUpload(image , "practice")


        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url, // URL from Cloudinary
        });

        res.status(200).json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image successfully uploaded",
            data: fileData
        });


    } catch (error) {
        
        console.error(error);
        res.status(500).json(
            {
                success:false,
                error:error.message,
                message: "Internal server error",
            }
        )

    }


}