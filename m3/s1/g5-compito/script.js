var Phone = /** @class */ (function () {
    function Phone(carica, numeroChiamate, costoMinuto, registroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = [];
    }
    Phone.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    Phone.prototype.numero404 = function () {
        return "Il tuo credito residuo \u00E8 ".concat(this.carica, " \u20AC ");
    };
    Phone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Phone.prototype.chiamata = function (min) {
        var costChia = min * this.costoMinuto;
        if (costChia <= this.carica) {
            this.carica -= costChia;
            this.numeroChiamate++;
            var id = this.numeroChiamate;
            var durata = min;
            var dataOra = new Date();
            this.registroChiamate.push({ id: id, durata: durata, dataOra: dataOra });
        }
        else {
            console.log('Credito insufficiente');
        }
    };
    Phone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        this.registroChiamate = [];
    };
    Phone.prototype.mostraRegistroChiamate = function () {
        this.registroChiamate.forEach(function (c) {
            console.log("Numero delle chiamate: ".concat(c.id, " Durata: ").concat(c.durata, " Data e ora: ").concat(c.dataOra));
        });
    };
    Phone.prototype.filtraChiamatePerDataOra = function () {
    };
    return Phone;
}());
var user1 = new Phone(2, 0, 0.20, []);
console.log('user1');
user1.ricarica(2);
console.log(user1.numero404());
user1.chiamata(20);
console.log(user1.numero404());
user1.chiamata(20);
console.log(user1.numero404());
user1.chiamata(20);
user1.ricarica(3);
console.log(user1.numero404());
user1.chiamata(5);
console.log(user1.numero404());
console.log(user1.getNumeroChiamate());
user1.chiamata(5);
console.log(user1.numero404());
console.log(user1.getNumeroChiamate());
user1.mostraRegistroChiamate();
user1.azzeraChiamate();
console.log(user1.getNumeroChiamate());
console.error('=======================================================');
var user2 = new Phone(0, 0, 0.20, []);
console.log('user2');
user2.ricarica(4);
console.log(user2.numero404());
user2.chiamata(2);
console.log(user2.numero404());
user2.chiamata(20);
console.log(user2.numero404());
user2.chiamata(7);
user2.ricarica(3);
console.log(user2.numero404());
user2.chiamata(5);
console.log(user2.numero404());
console.log(user2.getNumeroChiamate());
user2.chiamata(5);
console.log(user2.numero404());
console.log(user2.getNumeroChiamate());
user2.mostraRegistroChiamate();
user2.azzeraChiamate();
console.log(user2.getNumeroChiamate());
console.error('=======================================================');
var user3 = new Phone(5, 0, 0.20, []);
console.log('user3');
user3.ricarica(10);
console.log(user3.numero404());
user3.chiamata(50);
console.log(user3.numero404());
user3.chiamata(2);
console.log(user3.numero404());
user3.chiamata(20);
user3.ricarica(3);
console.log(user3.numero404());
user3.chiamata(5);
console.log(user3.numero404());
console.log(user3.getNumeroChiamate());
user3.chiamata(5);
console.log(user3.numero404());
console.log(user3.getNumeroChiamate());
user3.mostraRegistroChiamate();
user3.azzeraChiamate();
console.log(user3.getNumeroChiamate());
