import addNumbers  from "./StringCalculator";

describe("String Calculator", () => {
    test("Should return 0 for empty string", () => {
        expect(addNumbers("")).toBe(0);
    })

    test("Should return number for string containing a single number", () => {
        expect(addNumbers("1")).toBe(1);
    })

    test("Should return sum two numbers for a comma seperated string of 2 numbers", () => {
        expect(addNumbers("1,2")).toBe(3);
    })

    test("Should return sum of all the comma seperated numbers", () => {
        expect(addNumbers("1,2,3,4")).toBe(10);
    })

    test("Should return sum by also handling line seperation", () => {
        expect(addNumbers("1\n2,3")).toBe(6);
    })

    test("Should return sum by handling custom delimiters for number seperation", () => {
        expect(addNumbers("//;\n1;2")).toBe(3)
    })
})