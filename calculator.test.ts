import { add, substract, isOdd, sum } from "./calculator"

class A {
    private fields: string;
    constructor(fields: string) {
        this.fields = fields;
    }

    public doFields() {
        return this.fields;
    }
}

let objs: Array<any>;

beforeEach(() => {
    objs = [{
        obj: new A("OK"),
        input: "somestring",
        output: "OK",
    }, {
        obj: new A("okay"),
        input: "somestring",
        output: "OK",
    }];
});

afterEach(() => {

});

test('it should be able to test OK', () => {
    objs.forEach(el => {

    });
})

test('it should be able to add first number and second number', () => {
    const result = add(1, 2);
    expect(result).toEqual(3)
});

test('it should be able to substract first number and second number', () => {
    const result = substract(1, 2);
    expect(result).toEqual(-1)
});

test('it should be able to return true if isOdd input is odd number', () => {
    const result = isOdd(3)
    expect(result).toBe(true)
})

test('it should be able to return false if isOdd input is even number', () => {
    const result = isOdd(18)
    expect(result).toBe(false)
})

test('it should be able to sum number', () => {
    const result = sum([1,4,13,5])
    expect(result).toBe(23)
})