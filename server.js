const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes/router');
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(express.json());
app.use('/', routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));