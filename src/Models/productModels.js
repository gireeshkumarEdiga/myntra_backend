const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{ type: String, required:true},
    price:{ type: Number, required:true},
    gender:{ type: String, required:true},
    ageGroup:{ type: String, required:true},
    description:{ type: String, required:true},
    category:{ type: String, required:true},
    brand:{ type: String, required:true},
    color:{ type: String, required:true},
    size:[{ type: String, required:true}],
    discount:{ type: String, required:true},
    off_price :{ type: Number, required:true},
    images:[{ type: String, required:true}],
    ratings:{ type: Number, required:true},
    count:{ type: Number, required:true}
},{
    versionKey: false,
    timestamps:true,
})

const product = mongoose.model("Product",productSchema);

module.exports = product;