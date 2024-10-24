const mongoose = require('mongoose');

const weddingCakeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const WeddingCake = mongoose.model('WeddingCake', weddingCakeSchema);

module.exports = WeddingCake;
