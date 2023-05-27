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
var tel1 = new Phone(2, 0, 0.20, []);
console.log('tel1');
tel1.ricarica(2);
console.log(tel1.numero404());
tel1.chiamata(20);
console.log(tel1.numero404());
tel1.chiamata(20);
console.log(tel1.numero404());
tel1.chiamata(20);
tel1.ricarica(3);
console.log(tel1.numero404());
tel1.chiamata(5);
console.log(tel1.numero404());
console.log(tel1.getNumeroChiamate());
tel1.chiamata(5);
console.log(tel1.numero404());
console.log(tel1.getNumeroChiamate());
tel1.mostraRegistroChiamate();
tel1.azzeraChiamate();
console.log(tel1.getNumeroChiamate());
console.error('=======================================================');
var tel2 = new Phone(0, 0, 0.20, []);
console.log('tel2');
tel2.ricarica(4);
console.log(tel2.numero404());
tel2.chiamata(2);
console.log(tel2.numero404());
tel2.chiamata(20);
console.log(tel2.numero404());
tel2.chiamata(7);
tel2.ricarica(3);
console.log(tel2.numero404());
tel2.chiamata(5);
console.log(tel2.numero404());
console.log(tel2.getNumeroChiamate());
tel2.chiamata(5);
console.log(tel2.numero404());
console.log(tel2.getNumeroChiamate());
tel2.mostraRegistroChiamate();
tel2.azzeraChiamate();
console.log(tel2.getNumeroChiamate());
console.error('=======================================================');
var tel3 = new Phone(5, 0, 0.20, []);
console.log('tel3');
tel3.ricarica(10);
console.log(tel3.numero404());
tel3.chiamata(50);
console.log(tel3.numero404());
tel3.chiamata(2);
console.log(tel3.numero404());
tel3.chiamata(20);
tel3.ricarica(3);
console.log(tel3.numero404());
tel3.chiamata(5);
console.log(tel3.numero404());
console.log(tel3.getNumeroChiamate());
tel3.chiamata(5);
console.log(tel3.numero404());
console.log(tel3.getNumeroChiamate());
tel3.mostraRegistroChiamate();
tel3.azzeraChiamate();
console.log(tel3.getNumeroChiamate());
