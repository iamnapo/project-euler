import { equal } from "node:assert/strict";
import test from "node:test";

import problem001 from "../problems/001.js";

test("Problem 1", () => equal(problem001(), "Problem 1 solution is: 233168"));
