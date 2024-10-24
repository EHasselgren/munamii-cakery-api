const mongoose = require('mongoose');

const shoppingBagSchema = new mongoose.Schema({
    items: [
        {
            type: mongoose.Schema.Types.Mixed, 
            required: true,
            itemId: { type: mongoose.Schema.Types.ObjectId, required: true }, 
            itemType: {
                type: String,
                enum: ['Cupcake', 'WeddingCake'],
                required: true
            },
            quantity: { type: Number, required: true, default: 1 }
        }
    ],
    createdAt: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model('ShoppingBag', shoppingBagSchema);
