var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var msgSchema = new Schema({
    from: {
        type: String,
        require: true,
        min: 3,
        max: 30
    },
    to: {
        type: String,
        require: true,
        min: 3,
        max: 30
    },
    text: {
        type: String,
        require: true,
        min: 1,
    },
    date: {
        type: Date,
        default: Date.now
    },
    // comments: [{ body: String, date: Date }],
});

const msgModel = mongoose.model('Msg', msgSchema);

module.exports = msgModel;