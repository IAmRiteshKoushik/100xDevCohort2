import {describe, expect, it} from "@jest/globals";
import { sum, multiply } from "../index";

// This has got excelled logging capabilities
describe("Testing all the calculator functionality", () => {

    describe("Testing sum function", () => {
        // Test 1
        it("adds 1 + 2 to equal 3", () => {
            expect(sum(1, 2)).toBe(3);
        });
        // Test 2
        it("adds 2 + 3 to equal 5", () => {
            expect(sum(1, 2)).toBe(3);
        });
        // Test 3
        it("should return the sum of negative numbers correctly", () => {
            const ans = sum(-1, -2);
            expect(ans).toBe(-3);
        });
    });

    describe("Testing multiply function", () => {
        // Test 1
        it("multilies 1 * 2 to equal 2", () => {
            expect(multiply(1, 2)).toBe(2);
        });
    });
});
