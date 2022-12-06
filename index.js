var express = require('express'),
    cors = require('cors'),
    bodyparser = require('body-parser'),
    dotenv = require('dotenv'),
    helmet = require('helmet'),
    mongoose = require('mongoose');

//App initialization
const app = express();
dotenv.config();   

const db = process.env.MONGO_URI;
const port = process.env.PORT;

//Middleware packages
app.use(cors());
app.use(require('morgan')('dev'));
app.use(helmet());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

mongoose
  .connect(`${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DataBase has been connected !"))
  .catch((err) => console.log("Cannot connect to database", err.message));

app.use("/api", require('./src/routes'));

app.use((err,req,res,next)=>{
  // console.error(err);
  const code = err.status || 500; 
  const errorResponce= {
    success: false,
    data: {},
    message: err.message || "Something happen",
    status: code,
  }
  console.error(errorResponce)
  return res.status(code).json(errorResponce);
})
app.listen(port, () => {
    console.log('Server is listening on:', port);
})