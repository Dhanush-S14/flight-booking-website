const mongoose = require('mongoose');

const USER_DB_URI = "mongodb://localhost:27017/userDB";
const FLIGHTS_DB_URI = "mongodb://localhost:27017/flightsDB";


const userConnection = mongoose.createConnection(USER_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

userConnection.asPromise().then(() => {
    console.log("Connected to userDB successfully");
}).catch((err) => {
    console.error("MongoDB Connection Error (userDB):", err);
    process.exit(1);
});

const flightsConnection = mongoose.createConnection(FLIGHTS_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

flightsConnection.asPromise().then(() => {
    console.log("Connected to flightsDB successfully");
}).catch((err) => {
    console.error("MongoDB Connection Error (flightsDB):", err);
    process.exit(1);
});

module.exports = {
    userConnection,
    flightsConnection
};
