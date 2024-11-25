import addNumbers  from "./StringCalculator";

describe("String Calculator", () => {
    test("Should return 0 for empty string", () => {
        expect(addNumbers("")).toBe(0);
    })
})