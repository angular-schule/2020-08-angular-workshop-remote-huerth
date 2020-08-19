"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(id, name) {
        this.id = id;
        this.name = name;
    }
    Customer.prototype.fooBar = function (bar) {
        var _this = this;
        setTimeout(function () {
            console.log('Die ID ist', _this.id, bar);
        }, 2000);
        var foo = "Hallo\nWelt\n" + bar;
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map