const dotenv = require("dotenv");
const mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require("express-session");
var morgan = require("morgan");
app.use(cookieParser());

console.log('cookieParser')
console.log(cookieParser)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config({ path: './config.env' });

mongoose.set('strictQuery', false);

 //const hostname = "localhost";
 const hostname = "192.168.200.249";

// Initialize DB
{/* 
mongoose
 .connect('mongodb+srv://tahminabithe47:01757112809A@electiontallywithlogin.1x4u0rl.mongodb.net/',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
 })
 .then(() => console.log('connection successful'))
 .catch(err => console.log(`no connection`))
 */}
 
 mongoose
.connect('mongodb://mongo:27017/registrationlogin',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('connection successful'))
.catch(err => console.log(`no connection`))

{/* 
mongoose
  .connect('mongodb://mongo:27017/registrationlogin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection successful');
  })
  .catch((err) => {
    console.error('Connection failed:', err);
  });
*/}

  // database connection with mongoose
  {/* 
 mongoose
 .connect('mongodb://localhost/registrationlogin',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
 })
 .then(() => {
  console.log('Connection successful');
})
.catch((err) => {
  console.error('Connection failed:', err);
});
*/}


const User = require('./model/userSchema');


// for understand the json format
app.use(express.json())

// we link the router files to make our route easy



// Enable CORS

app.use(cors({ origin: `http://${hostname}:3000`, credentials: true }));

//app.use(cors({ credentials: true }));



 


//*******************************************************************//

{/*}
app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
})*/}






//******************************************************************//

app.use(require('./router/auth'));


const port = process.env.PORT;




app.listen(port,() => {
   console.log(`server is running at port no ${port}`);
});