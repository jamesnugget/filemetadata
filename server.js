var express = require('express');
var cors = require('cors');
require('dotenv').config();
var multer = require("multer");

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

//Multer npm package demonstrated by 'Ganesh H' on YouTube
app.post("/api/fileanalyse", multer().single('upfile'), (req, res) => {
  cashe = req.file;
  jso = {
    "name": cashe["originalname"],
    "type": cashe["mimetype"],
    "size": cashe["size"]
  }
  res.json(jso);

});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
