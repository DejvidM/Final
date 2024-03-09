
const express = require('express')
const app = express();
const cors = require('cors')
app.use(express.json() , express.urlencoded ({extended : true}), cors());
require('./config/mognoose.config');
require('./routes/project.routes')(app)

app.listen(8000 , () => console.log('working'));