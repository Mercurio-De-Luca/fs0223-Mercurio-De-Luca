class SonAccount {
    balance: number;

    constructor(){
        this.balance = 0
    }

    oneDeposit (amount: number){
        this.balance += amount;
    }
    oneWithDraw (amount: number){
        if(amount <= this.balance){
            this.balance -= amount
        }else{
            console.log('saldo insufficente');
            
        }
    }
}

class MotherAccount extends SonAccount {
    addInterest () {
        let interest = this.balance*0.1;
        this.balance += interest;
    }
}

let sonAccount = new SonAccount();
sonAccount.oneDeposit(100);
sonAccount.oneWithDraw(50);

let motherAccount = new MotherAccount();
motherAccount.oneDeposit(900);
motherAccount.oneWithDraw(250);

console.log("Saldo conto figlio:", sonAccount.balance);
console.log("Saldo conto madre:", motherAccount.balance);

