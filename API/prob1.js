const csv = require("csv-parser");
const fs = require("fs");

var countObj = {};
const result = [];
module.exports = function (req, res) {
  fs.createReadStream("./deliveries.csv")
    .pipe(csv())
    .on("data", (data) => {
      result.push(data);
    })
    .on("end", () => {
      console.log(result);
      res.send(result);
      res.end();
    });
};
