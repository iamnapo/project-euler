import test from "node:test";
import { equal } from "node:assert/strict";

import problem042 from "../problems/042.js";

test("Problem 42", () => equal(problem042(), "Problem 42 solution is: 162"));
