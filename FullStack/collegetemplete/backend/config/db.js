const mongoose = require('mongoose');


const database=()=>{
        mongoose.connect(process.env.DB_URI,{
                useNewUrlParser: true,
              }
            );
            
            const db = mongoose.connection;
            db.on("error", console.error.bind(console, "connection error: "));
            db.once("open", function () {
              console.log("Connected successfully");
            });            
}

module.exports = database;

