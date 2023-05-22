const express = require('express');
const app = express();

app.use(express.json());

app.put("/users/:id/accounts/debit", (req, res) => {
    let id = req.params.id;
});

app.put("/users/:id/accounts/credit", (req, res) => {
    let id = req.params.id;
});

app.get("/users/:id/accounts", (req, res) => {
    let id = req.params.id;
    res.send(id);
});

app.listen(3000, () => console.log("Server started on port 3000"));