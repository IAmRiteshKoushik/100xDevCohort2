"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function to cfreate a users table in your database
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: ""
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect(); // this takes time, do not make this sync
        try {
            yield client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY
                name VARCHAR(100)
                email VARCHAR(100)
            )
        `);
        }
        catch (error) {
        }
    });
}
