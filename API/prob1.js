const csv = require("csv-parser");
const fs = require("fs");
const Delivery = require("../db/models/deliveries");

var countObj = {};
var ids = 0;
module.exports = function (req, res) {
  fs.createReadStream("./matches.csv")
    .pipe(csv())
    .on("data", (data) => {
      if (data["SEASON"] == "2016" && data["TOSS_DECISION"] == "field") {
        while (ids < 11) {
          countObj["2016"] = { ...countObj["2016"], [ids]: data };
          ids = ids + 1;
        }
      }
      if (data["SEASON"] == "2017" && data["TOSS_DECISION"] == "field") {
        while (ids < 11) {
          countObj["2017"] = { ...countObj["2018"], [ids]: data };
          ids = ids + 1;
        }
      }
    })
    .on("end", () => {
      res.send(countObj);
      res.end();
    });
};
