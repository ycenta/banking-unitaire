class Account {
    constructor(solde, libelle) {
        if (solde>=0 && solde<=1000) {
            this.solde = solde;
        } else {
            this.solde = 0;
        }
        this.libelle = libelle;
    }
}

module.exports = Account;