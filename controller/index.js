const fs = require('fs');
const readline = require('readline');
var geolib = require("geolib")

exports.codeChallenge = function(req, res, next) {
    const Request = req.body ? req.body : {};
    const filePath = "./public/files/Customers _Assignment_Coding Challenge.txt"
    fs.readFile(filePath, "utf-8", (err, file) => {
        try {
            if (err) throw err;
            else {
                readFile([], filePath)
                    .then((data)=>{ return res.json({code: 200, data : data}) })
                    .catch(err => { throw err })
            }
        } catch(e) {
            return res.json({code: 401, data : e});
        }
    });
}

async function readFile (arr, filePath) {
    return new Promise(function(resolve, reject) {
        try {
            const rl = readline.createInterface({
                input: fs.createReadStream(filePath),
                crlfDelay: Infinity
            });  
            rl.on('line', (line) => {
                await geodist(JSON.parse(line))
                    // .then((data)=>{ console.log(data) })
                    // .catch(err => { throw err })
                arr.push(JSON.parse(line));
            }).on('close', () => {
                resolve(arr);
            });
        } catch (err) {
            reject(err);
        }
      });
}

async function geodist ({latitude, longitude}) {
    return new Promise(function(resolve, reject) {
        try {
            var temp = geolib.getDistance(
                {latitude: "53.339428", longitude: "-6.257664"},
                {latitude: latitude, longitude: longitude}
            );
            resolve(temp/1000);
        } catch (err) {
            reject(err);
        }
      });
}
