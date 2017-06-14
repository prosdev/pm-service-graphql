const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    name: {
        type: String,
        required: "Must supply a name for property.",
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true,
        required: "Must provide a short description of property"
    }
});

module.exports = mongoose.model('Property', PropertySchema);