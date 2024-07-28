// Deep mocking
import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset } from "vitest-mock-extended";

// Anytime a PrismaClient object is used, we mock it away
export const prismaClient = mockDeep<PrismaClient>();
