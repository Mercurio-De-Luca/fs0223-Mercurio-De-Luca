abstract class LavoratoreAutonomo {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;
  
    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
      this.codredd = codredd;
      this.redditoannuolordo = redditoannuolordo;
      this.tasseinps = tasseinps;
      this.tasseirpef = tasseirpef;
    }
  
    abstract getUtileTasse(): number;
    abstract getTasseInps(): number;
    abstract getTasseIrpef(): number;
    abstract getRedditoAnnuoNetto(): number;
  }
  
class LavoratoreAutonomoSemplice extends LavoratoreAutonomo {
    getUtileTasse(): number {
      return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    }
  
    getTasseInps(): number {
      return this.redditoannuolordo * (this.tasseinps / 100);
    }
  
    getTasseIrpef(): number {
      return this.redditoannuolordo * (this.tasseirpef / 100);
    }
  
    getRedditoAnnuoNetto(): number {
      return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    }
  }
  
  class LavoratoreAutonomoSpeciale extends LavoratoreAutonomo {
    getUtileTasse(): number {
      return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef() - 1000;
    }
  
    getTasseInps(): number {
      return this.redditoannuolordo * (this.tasseinps / 100);
    }
  
    getTasseIrpef(): number {
      return this.redditoannuolordo * (this.tasseirpef / 100);
    }
  
    getRedditoAnnuoNetto(): number {
      return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef() - 1000;
    }
  }
  
 
const lavoratore1 = new LavoratoreAutonomoSemplice(1, 50000, 25, 20);
const lavoratore2 = new LavoratoreAutonomoSpeciale(2, 70000, 20, 18);

  