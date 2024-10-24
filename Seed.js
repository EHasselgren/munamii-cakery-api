require('dotenv').config();
const mongoose = require('mongoose');
const Cupcake = require('./models/Cupcake');
const WeddingCake = require('./models/WeddingCake');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

const cupcakes = [
    { title: "Chocolate Cupcake", price: "$3", image: "/images/chocolateCupcake.jpg" },
    { title: "Vanilla Cupcake", price: "$3", image: "/images/vanillaCupcake.jpg" },
    { title: "Red Velvet Cupcake", price: "$3.5", image: "/images/redVelvetCupcake.jpg" },
    { title: "Lemon Cupcake", price: "$3", image: "/images/lemonCupcake.jpg" },
    { title: "Strawberry Cupcake", price: "$3.5", image: "/images/strawberryCupcake.jpg" },
    { title: "Carrot Cupcake", price: "$3.5", image: "/images/carrotCupcake.jpg" },
    { title: "Red Velvet with Cream Cheese", price: "$4", image: "/images/redVelvetCupcake.jpg" },
    { title: "Chocolate Peanut Butter Cupcake", price: "$3.5", image: "/images/chocolatePeanutButterCupcake.jpg" },
    { title: "Cookies and Cream Cupcake", price: "$3", image: "/images/cookiesAndCreamCupcake.jpg" },
    { title: "Banana Nut Cupcake", price: "$3.5", image: "/images/bananaNutCupcake.jpg" },
    { title: "Peanut Butter Cupcake", price: "$3.5", image: "/images/peanutButterCupcake.jpg" },
];

const weddingCakes = [
    { title: "Classic Wedding Cake", price: "$200", image: "/images/classicWeddingCake.jpg" },
    { title: "Modern Wedding Cake", price: "$250", image: "/images/modernWeddingCake.jpg" },
    { title: "Rustic Wedding Cake", price: "$300", image: "/images/rusticWeddingCake.jpg" },
    { title: "Floral Wedding Cake", price: "$350", image: "/images/floralWeddingCake.jpg" },
    { title: "Elegant Lace Wedding Cake", price: "$400", image: "/images/classicWeddingCake.jpg" },
    { title: "Naked Wedding Cake", price: "$450", image: "/images/rusticWeddingCake.jpg" },
    { title: "Geode Wedding Cake", price: "$500", image: "/images/modernWeddingCake.jpg" },
    { title: "Vintage Floral Wedding Cake", price: "$550", image: "/images/floralWeddingCake.jpg" },
    { title: "Simple Tiered Wedding Cake", price: "$300", image: "/images/classicWeddingCake.jpg" },
    { title: "Cupcake Tower Wedding Cake", price: "$600", image: "/images/modernWeddingCake.jpg" },
];

const seedDatabase = async () => {
    try {
        await Cupcake.deleteMany({});
        await WeddingCake.deleteMany({});

        await Cupcake.insertMany(cupcakes);
        await WeddingCake.insertMany(weddingCakes);

        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();
