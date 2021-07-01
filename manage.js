const port = process.env.PORT || 8000
const server = require('./server/server.js')({ port: port })
server.listen(port)
console.log(`Server listening on port: ${port}...`)