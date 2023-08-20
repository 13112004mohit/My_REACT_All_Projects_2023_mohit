const app = require("./app")
const database = require('./config/db')


// Handling uncaught Exception
process.on("uncaughtException",(err) => {
        console.log(`Error : ${err.message}`);
        console.log(`shutting down the server for handling uncaught exception`)
        process.exit(1);
})


// config
if(process.env.NODE_ENV !== "PRODUCTION"){
        require("dotenv").config({
                path:"backend/config/config.env"
        })
}
database();


// create server
const server = app.listen(process.env.PORT, ()=> {
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
})



// unhandle promiss rejection
process.on("unhandledRejection", (err)=> {
        console.log(`shutting down the server for ${err.message}`)
        console.log(`shutting down the server fro unhandle promise rejection`)

        server.close(()=>{
                process.exit(1);
        })
})