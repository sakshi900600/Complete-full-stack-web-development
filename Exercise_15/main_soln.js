import fs from "fs/promises";
import fsn from "fs";
import path from "path";


// console.log(fs);
const basePath = "C:\\Users\\ASHUTOSH KUMAR\\OneDrive\\WorkBook\\Complete web development bootcamp\\Exercise_15"

let files = await fs.readdir(basePath)
// console.log(files);


for (const item of files) {
    console.log("running for", item);

    // finding elem before extensions like .jpg, .png
    let ext = item.split(".")[item.split(".").length - 1]
    
    // console.log(ext);
    // item.split(".").length > 1 - only for folders
    // if its not a js or json file or it is a folder

    if (ext != "js" && ext != "json" && item.split(".").length > 1) {

        // if(folder exists)
        if (fsn.existsSync(path.join(basePath, ext))) {
            // move the file to this directory 
            // fs.rename(folder,file)
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
        else {
            fs.mkdir(ext);
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
    }
    // console.log(item);
}