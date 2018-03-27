
const fs = require('fs');

var date = new Date();

setTimeout(() => {
    fs.appendFileSync(process.argv[3], "\r\n" + date);
}, process.argv[2])
