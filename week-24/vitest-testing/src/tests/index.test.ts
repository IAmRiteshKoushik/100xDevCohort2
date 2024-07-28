import {describe, expect, it, vi} from "vitest";
import request from "supertest";
import { app } from "../index";

// -- This code basically means that whenever you encounter a certian function 
// from a connected component (like a database) 
// -- If you are not mocking, then you are writing an integration test where 
// you are connecting different components for testing purposes and testing 
// all the connected components.
vi.mock("../db", () => ({
    prismaClient: { 
        // table names
        sum: { 
            // functions on those tables
            create: vi.fn(),
            findMany: vi.fn(),
        },
        user: {
            create: vi.fn(),
            findMany: vi.fn(),
            findUnique: vi.fn(),
            update: vi.fn(),
            delete: vi.fn()
        }
    }
}));

describe("POST /sum", () => {
    // Test 1
    it("Should return the sum of two numbers", async() => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2,
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });
    // Test 2
    it("Should return the sum of two negative numbers", async() => {
        const res = await request(app).post("/sum").send({
            a: -1,
            b: -2,
        });
        // Assert on the expectations
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
    });
});

describe("POST /v1/sum", () => {
    // Should PASS (right inputs)
    it("Should return the sum of two numbers", async() => {
        const res = await request(app).post("/v1/sum").send({
            a: 1,
            b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });
    // Should PASS (wrong inputs)
    it("should return 411 if no inputs are provided", async() => {
        const res = await request(app).post("/v1/sum").send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs");
    });
});

describe("GET /v1/sum", () => {
    // Should PASS (right inputs)
    it("Should return the sum of two numbers", async() => {
        const res = await request(app).get("/v1/sum").set({
            a: "1",
            b: "2"
        }).send();
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });
    // Should PASS (wrong inputs)
    it("should return 411 if no inputs are provided", async() => {
        const res = await request(app).get("/v1/sum").send();
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs");
    });
});
