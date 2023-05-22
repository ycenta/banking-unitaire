const express = require('express');
const app = express();

app.use(express.json());

app.put("/users/:id/accounts/debit", (req, res) => {
    res.send("Hello World");
});

app.put("/users/:id/accounts/credit", (req, res) => {
    res.send("Hello World");
});

app.get("/users/:id/accounts", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => console.log("Server started on port 3000"));