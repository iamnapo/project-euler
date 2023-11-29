import test from "node:test";
import { equal } from "node:assert/strict";

import problem009 from "../problems/009.js";

test("Problem 9", () => equal(problem009(), "Problem 9 solution is: 31875000"));
