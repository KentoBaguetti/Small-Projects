import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Enter the URl you want to convert into a QR code:",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    let qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream('qr_image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });