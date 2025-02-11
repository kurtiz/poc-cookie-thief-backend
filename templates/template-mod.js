import {readFile} from "fs/promises";
import fs from "fs";

const htmlFilePath = './replica-template.html';
const htmlContent = await readFile(htmlFilePath, 'utf8');

const html = htmlContent
    .replace("{message_header}", 'This is a message Header')
    .replace("{recepient_name}", 'Matt')
    .replace("{message_body}", 'your message')

fs.writeFileSync("example.html", html);

