require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT;
    
app.use(express.json());
app.use(cors());
app.use(compression());
app.use('/api/v1/makethemtech', routes);

app.get('/', (req, res) => {
    res.send('App is working fine!');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));