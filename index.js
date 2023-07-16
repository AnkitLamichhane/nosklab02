//implement get and post method and in post method take users info and write that into file . 

const express = require("express")
const fs = require("fs")

const app = express()
app.use(express.json())
const port = 5050
function getUser(req, res) {
    const id = req.params.id
    fs.readFile("./users.json", "utf-8", (err, data) => {
        let myObject = JSON.parse(data)
        myObject.map(user => {
            console.log(user.id)
            console.log(id)
            if (user.id == id) {


                res.send(user)
            }
            else {
                res.json({
                    "message": "user not found"
                })
            }

        })
    })
}
function addUser(req, res) {

    const content = {
        "id": req.body.id,
        "name": req.body.name,
        "email": req.body.email
    }
    fs.writeFile('./users.json', JSON.stringify(content), err => {
        if (err) {
            console.error(err);
        }
        else {
            res.json({
                "message": "User added successfully"
            })
        }
    });
}

    app.get("/user/:id", getUser)
    app.post("/user", addUser)
    
        function listening() {
        console.log('Listening on port 5050')
    }
    app.listen(port, listening)