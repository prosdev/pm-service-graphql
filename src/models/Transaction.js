const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    name: {
        type: String,
        required: 'Must supply a name for transaction',
        trim: true
    },
    price: {
        type: Number,
        required: 'Must supply a price for transaction'
    },
    category: [String],
    type: {
        type: String,
        required: 'Must supply a type for transaction'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    property: {
        type: mongoose.Schema.ObjectId,
        ref: 'Property',
        required: 'Must supply a property id associated with transaction'
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);