//DONE : 2016 and 2017 team who fielded first
//TODO : Sorting according to TEAM name remaining

const csv = require("csv-parser");
const fs = require("fs");
const Delivery = require("../db/models/deliveries");

var countObj = {};
var ids = 0;
var idl = 0;

module.exports = function (req, res) {
  fs.createReadStream("./matches.csv")
    .pipe(csv())
    .on("data", (data) => {
      if (data["SEASON"] == "2016" && data["TOSS_DECISION"] == "field") {
        if (ids < 11) {
          countObj["2016"] = { ...countObj["2016"], [ids]: data };
          ids = ids + 1;
        }
      } else if (data["SEASON"] == "2017" && data["TOSS_DECISION"] == "field") {
        if (idl < 11) {
          countObj["2017"] = { ...countObj["2017"], [idl]: data };
          idl = idl + 1;
        }
      }
    })
    .on("end", () => {
      res.send(countObj);
      res.end();
    });
};
