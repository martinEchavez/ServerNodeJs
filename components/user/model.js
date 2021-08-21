const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    }
});

const model = mongoose.model('User', mySchema);
module.exports = model;