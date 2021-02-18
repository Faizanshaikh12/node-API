const express = require('express');
require('./db/connection');
const router = require('./router/main-routting');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`server running on ${port}`)
})
