const { userConnection, flightsConnection } = require('../connection');
const userSchema = require('../models/user');
const flightSchema = require('../models/flights');

const User = userConnection.model('User', userSchema);
const Flight = flightsConnection.model('Flight', flightSchema);


const airports = [
    "Delhi (DEL)",
    "Mumbai (BOM)",
    "Bangalore (BLR)",
    "Chennai (MAA)",
    "Hyderabad (HYD)",
    "Kolkata (CCU)",
    "Pune (PNQ)",
    "Goa (GOI)",
    "Ahmedabad (AMD)",
    "Jaipur (JAI)",
    "Lucknow (LKO)",
    "Chandigarh (IXC)"
];

const getAirports = (req, res) => {
    try {
        const query = req.query.q?.toLowerCase();
        if (!query || query.trim().length === 0) {
            return res.json([]);
        }

        const filteredAirports = airports.filter(airport =>
            airport.toLowerCase().includes(query)
        );

        res.json(filteredAirports);
    } catch (error) {
        console.error("Error in /airports endpoint:", error);
        res.status(500).json({ message: "Error fetching airport suggestions" });
    }
};

const signup = async (req, res) => {
    try {
        const { name, email, phone, aadharNumber, studentId, university, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already registered." });

        const user = new User({ name, email, phone, aadharNumber, studentId, university, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Signup failed", error });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) return res.status(400).json({ message: "Invalid email or password." });

        res.status(200).json({ redirect: "/main.html" });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Login failed", error });
    }
};

const getFlights = async (req, res) => {
    try {
        const { from, to, date } = req.query;
        if (!from || !to || !date) return res.status(400).json({ message: "Invalid search parameters" });

        const flights = await Flight.find({
            departure: { $regex: `^${from}`, $options: "i" },
            destination: { $regex: `^${to}`, $options: "i" },
            date
        });

        res.json(flights);
    } catch (error) {
        console.error("Flights fetch error:", error);
        res.status(500).json({ message: "Could not fetch flights" });
    }
};

const bookFlight = async (req, res) => {
    try {
        const { flightId, airline, flightNumber, from, to, date, price, userEmail } = req.body;

        if (!flightId || !airline || !flightNumber || !from || !to || !date || !price || !userEmail) {
            return res.status(400).json({ message: "Missing booking details" });
        }

        const user = await User.findOne({ email: userEmail });
        if (!user) return res.status(404).json({ message: "User not found" });

        user.trips.push({ flightId, airline, flightNumber, from, to, date, price });
        await user.save();

        res.status(200).json({ message: "Flight booked successfully!" });
    } catch (error) {
        console.error("Booking error:", error);
        res.status(500).json({ message: "Booking failed" });
    }
};

const cancelBooking = async (req, res) => {
    try {
        const { userEmail, flightId } = req.body;

        if (!userEmail || !flightId) return res.status(400).json({ message: "Missing cancellation info" });

        const user = await User.findOne({ email: userEmail });
        if (!user) return res.status(404).json({ message: "User not found" });

        const index = user.trips.findIndex(trip => trip.flightId === flightId);
        if (index === -1) return res.status(404).json({ message: "Booking not found" });

        user.trips.splice(index, 1);
        await user.save();

        res.status(200).json({ message: "Booking canceled successfully!" });
    } catch (error) {
        console.error("Cancel booking error:", error);
        res.status(500).json({ message: "Cancellation failed" });
    }
};

const getTrips = async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) return res.status(400).json({ message: "Email is required" });

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        console.log(`Trips for ${email}:`, user.trips);
        res.json(user.trips);
    } catch (error) {
        console.error("Trips fetch error:", error);
        res.status(500).json({ message: "Could not fetch trips" });
    }
};


module.exports = {
    getAirports,
    signup,
    login,
    getFlights,
    bookFlight,
    cancelBooking,
    getTrips
};




