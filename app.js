var express = require('express');
var logger = require('morgan');
const bodyParser = require('body-parser');
var app = express();
var pingRouter = require('./Routes/ping.routes');
const port = 3000;
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/ping', pingRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(err.status || 404).json({
        message: "No such route exists"
    })
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        message: "Error Message"
    })
});

app.listen(port, () => {
    console.log(`Application is running on port # : ${port}`);
})
module.exports = app;