const mongoose = require("../db/connections");

const Schema = mongoose.Schema;
const Mens = new Schema({
  logo: String,
  brand_name: String,
  CEO: String,
  type: String,
  price_point: String,
  categories: [
    {
      category: String,
      products: [
        {
          name: String,
          image_url: String,
          details: String,
          color: String,
          origin: String,
          content: String,
        },
      ],
    },
  ],
  link: String,
});

module.exports = mongoose.model("Mens", Mens);
