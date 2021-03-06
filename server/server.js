const express = require('express')
const path = require('path')

const app = express()
module.exports = function (deps) {
    if (process.env.NODE_ENV === "production") {
        console.log("production mode detected")
        app.use(express.static(path.join(__dirname, "..", "client", "build")))
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
        })
    } else {
        app.use(express.static("static"))
    }
    const server = require("http").createServer(app)

    return server
}