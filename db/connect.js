const mongoose = require('mongoose');
const connectMongodb = (url) => {
    return mongoose.connect(url)
        .then(() => {
            console.log("connected succssfully");
        })
        .catch((err) => {
            console.log(err);
        })
}
module.exports = connectMongodb;