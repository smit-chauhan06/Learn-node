const fs = require("fs");

fs.writeFileSync("./test.txt", "Hello");

fs.writeFile("./test.txt", "Hello asc", (err) => {
  console.log("err======>>>>>", err);
});

const data = fs.readFileSync("./test.txt", "utf-8");
console.log("data======>>>>>", data);
