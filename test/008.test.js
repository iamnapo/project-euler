import test from "node:test";
import { equal } from "node:assert/strict";

import problem008 from "../problems/008.js";

test("Problem 8", () => equal(problem008(), "Problem 8 solution is: 23514624000"));
