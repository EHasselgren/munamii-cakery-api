//const mongoose = require('mongoose');
//const dotenv = require('dotenv');
//const Cupcake = require('./models/Cupcake');
//const WeddingCake = require('./models/WeddingCake');
//const ShoppingBag = require('./models/ShoppingBag');

//dotenv.config();

//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//    .then(async () => {
//        console.log('MongoDB connected');

//        //await ShoppingBag.deleteMany({}); //dont use this please

//        // Insert sample data into the ShoppingBag collection
//        await ShoppingBag.insertMany(shoppingBagItems);

//        console.log('Shopping bag data seeded');
//        mongoose.connection.close();
//    })
//    .catch(err => {
//        console.error(err);
//        mongoose.connection.close();
//    });
