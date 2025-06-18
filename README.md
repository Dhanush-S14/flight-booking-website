# flight-booking-website including devops
# Way to clone the project 
copy the url under code <br>
open desired directory in the terminal by right click and open in terminal in desired folder or using the cd command <br>
git clone "url"<br>
all the file should appear in the desired directory <br>

# Pre-requisites
Nodejs is installed
express is installed 
Mongoose is installed 

# Mongo DB setup 
make sure you have mongosh or that you are comfortable with mongo compass <br>
create the following databases under any connection <br>
userDB with collection as users<br>
flightsDB with collection as flights<br>
make sure you paste the connection url in the server.js followed by /the-database-name if u have different db name for userDB and flightsDB<br>
here is some sample data that can be inserted in flightsDB <br>

# Mongosh Code 
use flightsDB <br><br>
db.flights.insertMany([
  { airline: "IndiGo", flightNumber: "6E101", departure: "Delhi", destination: "Mumbai", price: 7500, date: "2025-04-02" }, <br>
  { airline: "Air India", flightNumber: "AI202", departure: "Bangalore", destination: "Chennai", price: 7200, date: "2025-04-02" }, <br>
  { airline: "SpiceJet", flightNumber: "SG303", departure: "Hyderabad", destination: "Kolkata", price: 6800, date: "2025-04-02" },<br>
  { airline: "GoAir", flightNumber: "G8134", departure: "Pune", destination: "Goa", price: 7900, date: "2025-04-02" },<br>
  { airline: "Vistara", flightNumber: "UK404", departure: "Chennai", destination: "Delhi", price: 7400, date: "2025-04-02" },<br>
  { airline: "IndiGo", flightNumber: "6E505", departure: "Mumbai", destination: "Bangalore", price: 7100, date: "2025-04-02" },<br>
  { airline: "SpiceJet", flightNumber: "SG707", departure: "Ahmedabad", destination: "Jaipur", price: 6700, date: "2025-04-02" },<br>
  { airline: "Air India", flightNumber: "AI808", departure: "Kolkata", destination: "Hyderabad", price: 7000, date: "2025-04-02" },<br>
  { airline: "GoAir", flightNumber: "G8120", departure: "Lucknow", destination: "Chandigarh", price: 7300, date: "2025-04-02" },<br>
  { airline: "Vistara", flightNumber: "UK909", departure: "Delhi", destination: "Bangalore", price: 7600, date: "2025-04-02" },<br>
  { airline: "IndiGo", flightNumber: "6E112", departure: "Mumbai", destination: "Ahmedabad", price: 7400, date: "2025-04-02" },<br>
  { airline: "Air India", flightNumber: "AI215", departure: "Chennai", destination: "Hyderabad", price: 7200, date: "2025-04-02" },<br>
  { airline: "SpiceJet", flightNumber: "SG330", departure: "Goa", destination: "Mumbai", price: 6900, date: "2025-04-02" },<br>
  { airline: "GoAir", flightNumber: "G8150", departure: "Jaipur", destination: "Delhi", price: 7700, date: "2025-04-02" },<br>
  { airline: "Vistara", flightNumber: "UK502", departure: "Bangalore", destination: "Kolkata", price: 7800, date: "2025-04-02" },<br>
  { airline: "IndiGo", flightNumber: "6E250", departure: "Pune", destination: "Hyderabad", price: 7100, date: "2025-04-02" },<br>
  { airline: "Air India", flightNumber: "AI650", departure: "Chandigarh", destination: "Mumbai", price: 7500, date: "2025-04-02" },<br> 
  { airline: "SpiceJet", flightNumber: "SG999", departure: "Kolkata", destination: "Pune", price: 7300, date: "2025-04-02" },<br>
  { airline: "GoAir", flightNumber: "G8175", departure: "Delhi", destination: "Lucknow", price: 6900, date: "2025-04-02" },<br>
  { airline: "Vistara", flightNumber: "UK755", departure: "Hyderabad", destination: "Jaipur", price: 7700, date: "2025-04-02" }<br>
]);<br>


# Outputs and Screens
<html>
<body>
<img src="https://github.com/user-attachments/assets/0697cb0e-8cc4-4aed-a285-c3cca48e1962" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/5220ace0-1b22-40c3-be0d-31b799639ca1" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/c482ba53-95fd-4d82-90aa-ce407f1b86b8" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/0509bc76-be14-4360-832f-d5478e325035" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/71985c18-c37a-47ce-8f3a-46ebd5d297fb" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/7fe1707b-4e94-4f85-b35a-57ff31640a06" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/f4f8e9c2-b44f-4e97-87a1-239b6aa8484b" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/58f76d08-3dee-45f3-b963-b24540469ffd" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/8704974f-648d-4633-8043-3dedfaf95639" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/3e485896-a473-4e69-ba08-f72fdd3c601d" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/e6ff9fb3-0290-48f7-acb4-01c8cd8ffdd7" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/16cceb5b-1965-4633-88e7-cef2c9d7dc45" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/6ee8b823-347f-4411-a719-bc6dea8ce72a" width="300"><br><br>
<img src="https://github.com/user-attachments/assets/ba0616b6-892c-440b-9914-d2eb284bd29f" width="300"><br><br>
</body>
</html









