import fs from "fs/promises"

let a = await fs.readFile("sakshi.txt")

let b = await fs.writeFile("sakshi.txt","\n\n\n This is amazing promise")
console.log(a.toString(), b);
