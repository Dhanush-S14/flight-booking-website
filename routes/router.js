const express = require('express');
const path = require('path');
const {
    getAirports,
    signup,
    login,
    getFlights,
    bookFlight,
    cancelBooking,
    getTrips
} = require('../controllers/controller');

const router = express.Router();

router.get('/airports',getAirports);
router.post("/signup", signup);
router.post("/login", login);
router.get("/flights", getFlights);
router.post("/book", bookFlight);
router.post("/cancel-booking", cancelBooking);
router.get("/my-trips", getTrips);


const rootDir = path.resolve(__dirname, "..");

router.get("/", (req, res) =>
    res.sendFile(path.join(rootDir, "views", "signIN.html"))
);

router.get("/login.html", (req, res) =>
    res.sendFile(path.join(rootDir, "views", "login.html"))
);

router.get("/main.html", (req, res) =>
    res.sendFile(path.join(rootDir, "views", "main.html"))
);

router.get("/yourTrips.html", (req, res) =>
    res.sendFile(path.join(rootDir, "views", "yourTrips.html"))
);

router.get("/search.html", (req, res) =>
    res.sendFile(path.join(rootDir, "views", "search.html"))
);

module.exports = router;