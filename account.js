class Account {
    constructor(solde, libelle) {
        if (solde>=0 && solde<=1000) {
            this.solde = solde;
        } else {
            this.solde = 0;
        }
        this.libelle = libelle;
    }


     addMoney(this, money) {

        let solde = this.solde;
        let rest = 0;
        if (solde + money > 1000) {
           rest = (solde + money) - 1000;
        }
    
        let newsolde = solde + money - rest;
        this.solde = newsolde;
    
        return {
            moneyAdded: money - rest,
            rest: rest,
            solde: newsolde
        }
    
    }
    
    removeMoney(this, money) {
    
            let solde = this.solde;
            let rest = 0;
            if(solde - money < 0) {
                rest = money - solde;
                rest = rest * -1;            
            }
    
            let newsolde = solde - money + rest;
            this.solde = newsolde;
    
            return {
                moneyRemoved: money - rest,
                rest: rest,
                solde: newsolde
            }
        
    }
}

module.exports = Account;