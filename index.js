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

function addMoney(bankaccount, money) {

    let balance = bankaccount.balance;
    let rest = 0;
    if (balance + money > 1000) {
       rest = (balance + money) - 1000;
    }

    let newBalance = balance + money - rest;
    bankaccount.balance = newBalance;

    return {
        moneyAdded: money - rest,
        rest: rest,
        balance: newBalance
    }

}

function removeMoney(bankaccount, money) {

        let balance = bankaccount.balance;
        let rest = 0;
        if(balance - money < 0) {
            rest = money - balance;
            rest = rest * -1;            
        }

        let newBalance = balance - money + rest;
        bankaccount.balance = newBalance;

        return {
            moneyRemoved: money - rest,
            rest: rest,
            balance: newBalance
        }
    
    }