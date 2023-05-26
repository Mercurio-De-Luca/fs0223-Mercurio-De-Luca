interface ISmamartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    registroChiamate: {id: number, durata: number, dataOra: Date }[]

    ricarica(euro:number):void
    numero404():string
    getNumeroChiamate():number
    chiamata(min:number):void
    azzeraChiamate():void
    mostraRegistroChiamate(): void;
    filtraChiamatePerDataOra(dataOra: Date): void;
}

class Phone implements ISmamartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    registroChiamate: {id: number, durata: number, dataOra: Date }[]

    constructor(carica: number, numeroChiamate: number, costoMinuto: number, registroChiamate: []){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = [];
    }

    ricarica(euro:number):void{
        this.carica += euro;
    }
    numero404():string{
        return `Il tuo credito residuo è ${this.carica} € `
    }
    getNumeroChiamate():number{
        return  this.numeroChiamate;
    }
    chiamata(min:number):void{
        let costChia = min * this.costoMinuto;
        if(costChia <= this.carica){
            this.carica -= costChia;
            this.numeroChiamate++;
            let id = this.numeroChiamate;
            let durata = min;
            let dataOra = new Date ();
            this. registroChiamate.push({id, durata, dataOra});
        }else{
            console.log('Credito insufficiente');           
        }
    }
    azzeraChiamate():void{
        this.numeroChiamate = 0;
        this.registroChiamate = [];
    }
    mostraRegistroChiamate(): void{
        this.registroChiamate.forEach((c) => {
            console.log(`Numero delle chiamate: ${c.id} Durata: ${c.durata} Data e ora: ${c.dataOra}`);           
        })
    }
    filtraChiamatePerDataOra(): void{
        
    }
}

let user1 = new Phone(2, 0, 0.20, [])
console.log('user1');

user1.ricarica(2);
console.log(user1.numero404())
user1.chiamata(20)
console.log(user1.numero404())
user1.chiamata(20)
console.log(user1.numero404())
user1.chiamata(20)
user1.ricarica(3);
console.log(user1.numero404())
user1.chiamata(5)
console.log(user1.numero404())
console.log(user1.getNumeroChiamate());
user1.chiamata(5)
console.log(user1.numero404())
console.log(user1.getNumeroChiamate());
user1.mostraRegistroChiamate();
user1.azzeraChiamate();
console.log(user1.getNumeroChiamate());

console.error('=======================================================');

let user2 = new Phone(0, 0, 0.20, [])
console.log('user2');

user2.ricarica(4);
console.log(user2.numero404())
user2.chiamata(2)
console.log(user2.numero404())
user2.chiamata(20)
console.log(user2.numero404())
user2.chiamata(7)
user2.ricarica(3);
console.log(user2.numero404())
user2.chiamata(5)
console.log(user2.numero404())
console.log(user2.getNumeroChiamate());
user2.chiamata(5)
console.log(user2.numero404())
console.log(user2.getNumeroChiamate());
user2.mostraRegistroChiamate();
user2.azzeraChiamate();
console.log(user2.getNumeroChiamate());

console.error('=======================================================');


let user3 = new Phone(5, 0, 0.20, [])
console.log('user3');


user3.ricarica(10);
console.log(user3.numero404())
user3.chiamata(50)
console.log(user3.numero404())
user3.chiamata(2)
console.log(user3.numero404())
user3.chiamata(20)
user3.ricarica(3);
console.log(user3.numero404())
user3.chiamata(5)
console.log(user3.numero404())
console.log(user3.getNumeroChiamate());
user3.chiamata(5)
console.log(user3.numero404())
console.log(user3.getNumeroChiamate());
user3.mostraRegistroChiamate();
user3.azzeraChiamate();
console.log(user3.getNumeroChiamate());




