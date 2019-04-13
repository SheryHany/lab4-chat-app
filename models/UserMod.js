var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        require: true,
        min: 3,
        max: 20
    },
    email: String,
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    city: {
        type: String
    }
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;