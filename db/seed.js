const womens= require("../models/womens");
const womensData = require("../db/womens.json");

console.log(womensData);
womens.deleteMany({}).then(() => {
  womens.create(womensData)
    .then(() => {
      womens.find({}).then((res) => console.log(res));
    })
    .catch((err) => {
      console.log(err);
    });
});
const mens = require("../models/mens");
const mensList = require("./mens.json");
console.log(mensList);

mens.deleteMany({}).then(() => {
  // Mongoose Model creating data
  mens.create(mensList).then((output) => {
    console.log(output);
    process.exit();
  });
});
