const axios = require('axios');
// helps to get the port of server running in particular region.
const regionMap = require('./regionMap.json');

const region = process.env.REGION;


const multiRegionGet = async (req, res) => {
    const requestRegion = req.params.region;
    if(region == requestRegion){
        return res.send(`Hi i am replying from ${region}`)
    } else if(regionMap[requestRegion]) {
        // proxy-server
        const regionUrl = `http://localhost:${regionMap[requestRegion]}/hello/${requestRegion}`
        const response = await axios.get(regionUrl);
        return res.json(response?.data);
    }
    return res.send('Invalid Region');
}

module.exports = {
    multiRegionGet
}