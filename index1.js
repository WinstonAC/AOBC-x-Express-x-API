const express = require("express");
const app = express();
const mens = require("./models/mens");
const parser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(parser.json());

app.get("/", (req, res) => {
  mens.find({}).then((mens) => {
    res.json(mens);
  });
});
app.get("/mens", (req, res) => {
  mens.find({}).then((mens) => {
    res.json(mens);
  });
});

app.post("/mens", (req, res) => {
  console.log("you are submitting data to create a mens", req.body);
  mens.create(req.body).then((mens) => {
    res.json(mens);
  });
});
app.post("/mens/:brand_name", (req, res) => {
  console.log("you are submitting data to create a brand_name", req.body);

  brand_name
    .findByIdAndUpdate(
      req.params.brand_name,
      { $push: { items: req.body } },
      { new: true }
    )
    .then((mens) => {
      res.json(mens);
    });
});
app.get("/mens/:brand_name", (req, res) => {
  mens
    .findOne({ brand_name: decodeURI(req.params.brand_name) })
    .then((mens) => {
      res.json(mens);
    });
});

app.put("/mens/:brand_name", (req, res) => {
  mens
    .findOneAndUpdate(
      { brand_name: decodeURI(req.params.brand_name) },
      req.body,
      { new: true }
    )
    .then((mens) => {
      res.json(mens);
    });
});
app.delete("/mens/:brand_name", (req, res) => {
  mens
    .findOneAndDelete({ brand_name: req.params.brand_name }, req.body)
    .then((mens) => {
      res.json(mens);
    });
});

app.set("port", process.env.PORT || 8080);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });

// // app.listen(1717, () => {
// //   console.log("Listening on port 1717");
// // });
