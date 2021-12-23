var data = {};

data1 = { x: 2017, y: 1733 };
data2 = { x: 2017, y: 1733 };

if (data1["x"] === 2017) {
  console.log("In loop");
  data["2017"] = { ...data[2017], data1 };
}
if (data2["x"] === 2017) {
  console.log("In loop");
  data["2017"] = { ...data[2017], data2 };
}

console.log(data);
