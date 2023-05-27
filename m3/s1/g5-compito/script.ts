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
        let costChia: number = min * this.costoMinuto;
        if(costChia <= this.carica){
            this.carica -= costChia;
            this.numeroChiamate++;
            let id: number = this.numeroChiamate;
            let durata: number = min;
            let dataOra: Date = new Date ();
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
        this.registroChiamate.forEach((c): void => {
            console.log(`Numero delle chiamate: ${c.id} Durata: ${c.durata} Data e ora: ${c.dataOra}`);           
        })
    }
    filtraChiamatePerDataOra(): void{
        
    }
}

let tel1 = new Phone(2, 0, 0.20, [])
console.log('tel1');

tel1.ricarica(2);
console.log(tel1.numero404())
tel1.chiamata(20)
console.log(tel1.numero404())
tel1.chiamata(20)
console.log(tel1.numero404())
tel1.chiamata(20)
tel1.ricarica(3);
console.log(tel1.numero404())
tel1.chiamata(5)
console.log(tel1.numero404())
console.log(tel1.getNumeroChiamate());
tel1.chiamata(5)
console.log(tel1.numero404())
console.log(tel1.getNumeroChiamate());
tel1.mostraRegistroChiamate();
tel1.azzeraChiamate();
console.log(tel1.getNumeroChiamate());

console.error('=======================================================');

let tel2 = new Phone(0, 0, 0.20, [])
console.log('tel2');

tel2.ricarica(4);
console.log(tel2.numero404())
tel2.chiamata(2)
console.log(tel2.numero404())
tel2.chiamata(20)
console.log(tel2.numero404())
tel2.chiamata(7)
tel2.ricarica(3);
console.log(tel2.numero404())
tel2.chiamata(5)
console.log(tel2.numero404())
console.log(tel2.getNumeroChiamate());
tel2.chiamata(5)
console.log(tel2.numero404())
console.log(tel2.getNumeroChiamate());
tel2.mostraRegistroChiamate();
tel2.azzeraChiamate();
console.log(tel2.getNumeroChiamate());

console.error('=======================================================');


let tel3 = new Phone(5, 0, 0.20, [])
console.log('tel3');


tel3.ricarica(10);
console.log(tel3.numero404())
tel3.chiamata(50)
console.log(tel3.numero404())
tel3.chiamata(2)
console.log(tel3.numero404())
tel3.chiamata(20)
tel3.ricarica(3);
console.log(tel3.numero404())
tel3.chiamata(5)
console.log(tel3.numero404())
console.log(tel3.getNumeroChiamate());
tel3.chiamata(5)
console.log(tel3.numero404())
console.log(tel3.getNumeroChiamate());
tel3.mostraRegistroChiamate();
tel3.azzeraChiamate();
console.log(tel3.getNumeroChiamate());




