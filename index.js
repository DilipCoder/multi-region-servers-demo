var http = require('http');
const regionMap = require('./regionMap.json');
const { app } = require('./app');

const region = process.env.REGION
const port = regionMap[region];
const server = http.createServer(app);

server.listen(port, (err) => {
    if(err){
        console.log(`error in server ${region}`);
    } else {
        console.log(`server running in region: ${region}, port:${port}`);
    }
});