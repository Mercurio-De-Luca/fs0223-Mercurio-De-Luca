class Abbigliamento {
    id: number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;
    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number){
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
    mostraPrezzo(): string {
        return `${this.prezzoivainclusa}`
    }
}

fetch('./starter/Abbigliamento.json')
.then((res: Response) => res.json())
.then((dato: Abbigliamento[]) =>{
    console.log(dato);
    let vestiti: Abbigliamento[] = [];
    dato.forEach((abb: Abbigliamento) => {
    let capo = new Abbigliamento(abb.id, abb.codprod, abb.collezione, abb.capo, abb.modello, abb.quantita, abb.colore, abb.prezzoivaesclusa, abb.prezzoivainclusa, abb.disponibile, abb.saldo)
    vestiti.push(capo);
  });
  console.log(vestiti);
  let vestSel = vestiti.slice(2, 5)
  vestSel.forEach(vestito => console.log(vestito.mostraPrezzo()))
  
})
.catch(err => console.error(err))  


