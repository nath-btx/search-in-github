import express from "express";

export function launch(port) {
    const application = express();

    application.get("/api/users/:username", (request, response) => {
        response.json({ username: request.params.username })
    });

    application.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
    })
}