const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://mytra:myntra@cluster0.yxx5k.mongodb.net/?retryWrites=true&w=majority")
}