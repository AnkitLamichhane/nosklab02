const fs = require("fs")


function printData(err, Data) {
    if (err) {
        console.log(err);
        return;
    }
}


fs.readFile("./users.json", "utf-8", (err, data) => {
    let myObject = JSON.parse(data)
    console.log(myObject)
})