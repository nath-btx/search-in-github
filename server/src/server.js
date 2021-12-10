import express from "express";
import fetch from "node-fetch";
import insertUser from "./insertUser.js";
import getUser from "./getUser.js"



export function launch(port) {
    const app = express();

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
    })

    app.get("/api/users/:username", async (req, res) => {
        const userInfo = await getUser(req.params.username)
        if (userInfo){
            console.log("User Info exists")
            res.json(userInfo)
        }
        else {
            fetch("https://api.github.com/users/" + req.params.username)
            .then(result => result.json())
            .then(function (result) {
                if (result['message'] == 'Not Found')
                    console.log('not found')
                else{
                    console.log("result.id : " + result.id)
                    res.json(result)
                    insertUser(result)
                    // res.json({ username: req.params.username })
                }
            })
        }
         

        // fetch("https://api.github.com/users/" + req.params.username)
        // .then(result => result.json())
        // .then(function (result) {
        //     if (result['message'] == 'Not Found')
        //         console.log('not found')
        //     else{
        //         // console.log("result.id : " + result.id)
        //         // res.json(result)
        //         // const userInfo = getUser(result.id)
        //         // if (userInfo){
        //         //     res.json(userInfo)
        //         // }
        //         // else {
        //         //     insertUser(result)
        //         // }
        //         // res.json({ username: req.params.username })
        //     }
        // })

        // res.json({ username: req.params.username })
    });

    

    app.get('/',(req,res) => {
        res.send("hello from express")
      })
}


launch(4242)