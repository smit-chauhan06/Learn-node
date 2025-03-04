const fs = require("fs");

// fs.writeFileSync("./test.txt", "hey there");
// fs.writeFile("./test.txt", "hey there async", (err) => {});

// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log("🚀 ~ result:", result);

// fs.readFile("./contact.txt", "utf-8", (err, res̥ult) => {
//   if (err) {
//     console.log("🚀 ~ fs.readFile ~ err:", err);
//   } else {
//     console.log("🚀 result", res̥ult);
//   }
// });

fs.appendFileSync("./test.txt", `${Date.now()} Hey Heloo\n`);

fs.cpSync("./test.txt", "./copy.txt");

console.log(fs.statSync("./test.txt").isFile());

const os = require("os");
console.log("os======>>>>>", os.cpus().length);
