"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kid = exports.User = void 0;
// function
function add(first, second) {
    return first + second;
}
console.log(add(1, 1));
// class
// inheritance
class User {
    constructor(id, fullname) {
        this.energy = 100;
        this.id = id;
        this.fullname = fullname;
    }
    getId() {
        return this.id;
    }
    static create(fullname) {
        return new User("9123890", fullname);
    }
    getFirstName() {
        return this.fullname.split(" ")[0] || "";
    }
    walk(kms) {
        const percentage = 0.1;
        this.energy = this.reduceEnergy(this.energy, kms, percentage);
    }
    run(kms) {
        const percentage = 0.25;
        this.energy = this.reduceEnergy(this.energy, kms, percentage);
    }
    getEnergy() {
        return this.energy;
    }
    reduceEnergy(currentEnergy, kms, percentage) {
        return currentEnergy - (kms * percentage);
    }
}
exports.User = User;
class Kid extends User {
    // run is overridden in this class
    // kid spend less energy than normal user
    run(kms) {
        const percentage = 0.05;
        this.energy = this.reduceEnergy(this.energy, kms, percentage);
    }
}
exports.Kid = Kid;
User.create("Mirdan"); // static method
const usr = new User("1", "Mamazo");
console.log(usr.getFirstName());
console.log(usr.getId());
usr.run(10);
console.log("Energy: ", usr.getEnergy());
const kid = new Kid("123", "Ikyuu San");
console.log(kid.getFirstName());
console.log(kid.getId());
kid.run(10);
console.log("Energy: ", kid.getEnergy());
usr.getId();
usr.getFirstName();
class KuraTerbang {
    constructor(id, fullname) {
        this.id = id;
        this.fullname = fullname;
    }
    move(kms) {
        console.log(`Kura Terbang Move ${kms} kms`);
    }
    print() {
        this.move(10);
        console.log(this.fullname);
    }
}
class KuraNormal {
    constructor(id, fullname) {
        this.id = id;
        this.fullname = fullname;
    }
    move(kms) {
        console.log(`Kura Normal Move ${kms} kms`);
    }
    print() {
        this.move(10);
        console.log(this.fullname);
    }
}
class Mirdan {
    constructor(id, fullname) {
        this.id = id;
        this.fullname = fullname;
    }
    move(kms) {
        console.log(`Mirdan Move ${kms} kms`);
    }
    print() {
        this.move(10);
        console.log(this.fullname);
    }
}
// can run methods of objects implementing interface Kura and Printer
function runAllKura(kura_kuras) {
    for (const kura of kura_kuras) {
        kura.move(10);
        kura.print();
    }
}
runAllKura([new Mirdan("1", "Mirdan S"), new KuraNormal("132", "Kura Normal"), new KuraTerbang("5423", "Kura Terbang")]);
