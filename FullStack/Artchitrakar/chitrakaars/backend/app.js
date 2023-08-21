const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error')
const cookieParser = require('cookie-parser');
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({ 
        origin: ["http://localhost:3000","http://192.168.100.14:3000"],
        credentials: true })); 
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// config
if(process.env.NODE_ENV !== "PRODUCTION"){
        require("dotenv").config({
                path:"backend/config/config.env"
        })
}

// imports routes
const user = require('./routes/userRoute');
const shop = require('./routes/shopRoute');
const blog = require('./routes/BlogRoute');
const team = require('./routes/TeamRoute');
const services = require('./routes/ServicesRoute');
const gallery = require('./routes/GalleryRoute');
const Hero = require('./routes/HeroRoute');
const newPicture = require('./routes/NewPictureRoute');

app.use("/api/v2",user)
app.use("/api/v2",shop)
app.use("/api/v2",blog)
app.use("/api/v2",team)
app.use("/api/v2",services)
app.use("/api/v2",gallery)
app.use("/api/v2",Hero)
app.use("/api/v2",newPicture)


// it's for ErrorHandling
app.use(errorMiddleware)

module.exports = app;