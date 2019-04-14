const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://admin:vl051196@cluster0-xmsap.mongodb.net/api2rest?retryWrites=true", 
    {
        useNewUrlParser: true
    })
mongoose.Promise = global.Promise

module.exports = mongoose
