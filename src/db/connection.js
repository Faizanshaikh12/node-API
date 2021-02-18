const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => {
    console.log('connected')
}).catch(() => {
    console.log('connection failed')
});
