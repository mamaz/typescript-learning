// function
function add(first: number, second: number) {
    return first + second;
}
console.log(add(1, 1))

// class
// inheritance
class User {
    private id: string;
    private fullname: string;
    protected energy: number = 100;

    constructor(id: string, fullname: string) {
        this.id = id;
        this.fullname = fullname;
    }

    public getId() {
        return this.id
    }

    static create(fullname: string){
        return new User("9123890", fullname)
    }

    public getFirstName(): string {
        return this.fullname.split(" ")[0] || ""
    }

    public walk(kms: number) {
        const percentage = 0.1;
        this.energy = this.reduceEnergy(this.energy, kms, percentage)
    }

    public run(kms: number) {
        const percentage = 0.25;
        this.energy = this.reduceEnergy(this.energy, kms, percentage)
    }

    public getEnergy(): number {
        return this.energy
    }

    protected reduceEnergy(currentEnergy: number, kms: number, percentage: number): number {
        return currentEnergy - (kms * percentage);
    }
}

class Kid extends User {
    public run(kms: number) {
        const percentage = 0.55;
        this.energy = this.reduceEnergy(this.energy, kms, percentage)
    }
}

User.create("Mirdan")


export default { User, Kid };

const usr = new User("1", "Mamazo")
console.log(usr.getFirstName())
console.log(usr.getId())

usr.run(10)
console.log("Energy: ", usr.getEnergy())

const kid = new Kid("123", "Ikyuu San")
console.log(kid.getFirstName())
console.log(kid.getId())
kid.run(100)

console.log("Energy: ", kid.getEnergy())

usr.getId()
usr.getFirstName()

// interface
interface Kura {
    id: string;
    fullname: string;
    move(kms: number): void;
}

interface Printer{
    print(): void
}

class KuraTerbang implements Kura, Printer {
    id: string
    fullname: string;

    constructor(id: string, fullname: string){
        this.id = id
        this.fullname = fullname
    }

    move(kms: number): void {
        console.log(`Kura Terbang Move ${kms} kms`)
    }

    public print() {
        this.move(10)
        console.log(this.fullname)
    }
}

class KuraNormal implements Kura, Printer {
    id: string
    fullname: string;

    constructor(id: string, fullname: string){
        this.id = id
        this.fullname = fullname
    }

    move(kms: number): void {
        console.log(`Kura Normal Move ${kms} kms`)
    }

    public print() {
        this.move(10)
        console.log(this.fullname)
    }
}

class Mirdan implements Kura {
    id: string
    fullname: string;

    constructor(id: string, fullname: string){
        this.id = id
        this.fullname = fullname
    }

    move(kms: number): void {
        console.log(`Mirdan Move ${kms} kms`)
    }

    public print() {
        this.move(10)
        console.log(this.fullname)
    }
}

// can run methods of objects implementing interface Kura and Printer
function runAllKura(kura_kuras: Array<Kura & Printer>): void {
    for (const kura of kura_kuras) {
        kura.move(10)
        kura.print()
    }
}

runAllKura([new Mirdan("1", "Mirdan S"), new KuraNormal("132", "Kura Normal"), new KuraTerbang("5423", "Kura Terbang")])
