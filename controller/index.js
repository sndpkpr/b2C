const fs = require('fs');
const readline = require('readline');
const geolib = require("geolib");
const Response = require('../lib/response.js')
const common = require("../config/common")
const statusCode = common.statusCode
const statusMsg = common.messages

exports.codeChallenge = function (req, res, next) {
    const Request = req.body ? req.body : {};
    const filePath = "./public/files/Customers _Assignment_Coding Challenge.txt"
    fs.readFile(filePath, "utf-8", (err, file) => {
        try {
            if (err) throw err;
            else {
                readFile([], filePath)
                    .then((data) => {
                        return res.json(Response(statusCode.OK, statusMsg.success, statusMsg.success, data.filter(word => word.distance < 100).sort(function (a, b) { return a.user_id - b.user_id; })));
                    })
                    .catch(err => { throw err })
            }
        } catch (e) {
            return res.json(Response(401, statusMsg.failed, statusMsg.failed, e));
        }
    });
}

async function readFile(arr, filePath) {
    return new Promise(function (resolve, reject) {
        try {
            const rl = readline.createInterface({
                input: fs.createReadStream(filePath),
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                geodist(JSON.parse(line))
                    .then((data) => { arr.push(data); })
                    .catch(err => { throw err })
            }).on('close', () => {
                resolve(arr);
            });
        } catch (err) {
            reject(err);
        }
    });
}

async function geodist(data) {
    return new Promise(function (resolve, reject) {
        try {
            var temp = geolib.getDistance(
                { latitude: "53.339428", longitude: "-6.257664" },
                { latitude: data.latitude, longitude: data.longitude }
            );
            data.distance = temp / 1000;
            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
}
