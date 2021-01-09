const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 5288;


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'pug');

// app.get('/',cors, (req,res) => {
//    res.sendFile('index');
// });


app.get('/', (req,res)=>{
    res.render(__dirname + `/views/index`);
 });




 app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
});