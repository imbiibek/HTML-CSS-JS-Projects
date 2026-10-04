import { input } from '@inquirer/prompts';
import qr from "qr-image";
import fs from "fs";

const answer = await input({ message: 'Enter URL' });

var qr_svg = qr.image(answer);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));

fs.writeFile('URL.txt', answer, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
