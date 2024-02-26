const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();

app.use(cors());
// Needed before our routes
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));

app.post('/contact-form', (req,res) => {
console.log(req.body.name + '' + req.body.email);
res.send('Thanks for submitting');
});
// let router = express.Router();

// app.use((req,res, next) => {
//     console.log(req.originalUrl);
//     next();
// })

// app.use((req, res, next) => {
//     fs.appendFileSync('log.txt', `${req.url}\n`);
//     next();
// });

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../public/index.html'));
// });
// app.get('/css/style.css',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../public/css/style.css'));
// });



app.use(express.static(path.join(__dirname, "../public")))
// Middleware

// app.get('/order/:id',(req,res)=>{
// let id = req.params.id;
// let email = req.query.email;
// res.send('your name is '+ id +' and your email is '+ email);

// })
// send  http://localhost:3000/order/pill
//  output "pill" in html

// send http://localhost:3000/order/pill?email=test@test.com
//  output:  your name is pill and your email is test@test.com
app.listen(3000);