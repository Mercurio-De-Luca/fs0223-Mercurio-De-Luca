var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.mostraPrezzo = function () {
        return "".concat(this.prezzoivainclusa);
    };
    return Abbigliamento;
}());
fetch('./starter/Abbigliamento.json')
    .then(function (res) { return res.json(); })
    .then(function (dato) {
    console.log(dato);
    var vestiti = [];
    dato.forEach(function (abb) {
        var capo = new Abbigliamento(abb.id, abb.codprod, abb.collezione, abb.capo, abb.modello, abb.quantita, abb.colore, abb.prezzoivaesclusa, abb.prezzoivainclusa, abb.disponibile, abb.saldo);
        vestiti.push(capo);
    });
    console.log(vestiti);
    var vestSel = vestiti.slice(2, 5);
    vestSel.forEach(function (vestito) { return console.log(vestito.mostraPrezzo()); });
})
    .catch(function (err) { return console.error(err); });
