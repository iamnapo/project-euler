import test from "node:test";
import assert from "node:assert";

import problem123 from "../problems/123.js";

test("Problem 123", () => assert.strictEqual(problem123(), "Problem 123 solution is: 21035"));
