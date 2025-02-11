import {readFile} from "fs/promises";
import fs from "fs";

const htmlFilePath = './replica-template.html';
const htmlContent = await readFile(htmlFilePath, 'utf8');

const html = htmlContent
    .replace("{message_header}", 'This is a message Header')
    .replace("{recepient_name}", 'Matt')
    .replace("{message_body}", 'Hellooo! AmaliTechies,<br/>' +
        '<br/>' +
        'You are invited to join us for the second edition of our Policy Chat<br/>' +
        '<br/>' +
        'This time the focus will be on :<br/>' +
        '<br/>' +
        '1. Relocation Policy<br/>' +
        '2. Employee Referral Policy<br/>' +
        '3. Immersive Internship Programme & NSS.<br/>' +
        '<br/>' +
        'It\'s a great opportunity to ask questions and to gain deep insights into key<br/>' +
        'policy decisions.<br/>' +
        '<br/>' +
        '<br/>' +
        'See you there!!!')

fs.writeFileSync("example.html", html);

