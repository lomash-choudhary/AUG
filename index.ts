import express from "express";
import os from "os";

const app = express();

app.get("/serverHealth", (req, res) =>{
    res.status(200).json(
        {
            message: "Server is healthy and this is the v0.1 of the app"
        }
    )
})

app.get("/", (req, res) =>{
    res.status(200).send("Home page")
})


app.get("/cpu", (req, res) => {
    for(let i = 0; i <= 1000000000; i++){
        Math.random();
    }
    res.status(200).json({
        message: "Hello world! form the server"
    })
})


app.get("/host", (req, res) => {
    res.status(200).json(
        {
            message: `Host name is ${os.hostname}`
        }
    )
})

export default app;
