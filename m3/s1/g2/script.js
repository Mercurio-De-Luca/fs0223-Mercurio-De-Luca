var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.balance = 0;
    }
    SonAccount.prototype.oneDeposit = function (amount) {
        this.balance += amount;
    };
    SonAccount.prototype.oneWithDraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log('saldo insufficente');
        }
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        var interest = this.balance * 0.1;
        this.balance += interest;
    };
    return MotherAccount;
}(SonAccount));
var sonAccount = new SonAccount();
sonAccount.oneDeposit(100);
sonAccount.oneWithDraw(50);
var motherAccount = new MotherAccount();
motherAccount.oneDeposit(900);
motherAccount.oneWithDraw(250);
console.log("Saldo conto figlio:", sonAccount.balance);
console.log("Saldo conto madre:", motherAccount.balance);
