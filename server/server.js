const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { startAgenda } = require('./services/jobs/start.agenda.service');
require('./config/config');



app.use(bodyParser.json());
app.use(require('./controllers/index.controller'));
startAgenda(process.env.URLDB);
mongoose.connect(process.env.URLDB,
    { useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true},
     (err,res) => {
if( err ) throw 'Cant connect : '+ err;
console.log('BD Online');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}`);
})
