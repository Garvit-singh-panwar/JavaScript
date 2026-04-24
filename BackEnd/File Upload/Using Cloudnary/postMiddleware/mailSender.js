import nodemailer from 'nodemailer';
import { Env } from "../utils/Env.js";
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

export const sendMail =  async function(doc){
    try {
        
        console.log(" doc " , doc);
        
        const transporter = nodemailer.createTransport({
            host: Env.MAIL_HOST,
            auth:{
                user: Env.MAIL_USER,
                pass: Env.MAIL_PASS,
            },
        });

        try {
            await transporter.verify();
            console.log("Server is ready to take our messages");
        } catch (err) {
            console.error("Verification failed:", err);
        }

        const templatePath = path.join(__dirname , "../public/email.html");
        let htmlString = fs.readFileSync(templatePath, 'utf-8');


        htmlString = htmlString
        .replace('userName', doc.name )
        .replace('imageLink', doc.imageUrl );

        let info = await transporter.sendMail(
            {
                from:  "Garvit  Singh",
                to: doc.email,
                subject: "new file uoloaded on Cloudnary",
                html: htmlString,
            }
        )


        console.log("Info => " , info);
    } catch (error) {
        console.error(error);
    }
};