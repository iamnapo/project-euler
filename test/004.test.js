import test from "node:test";
import { equal } from "node:assert/strict";

import problem004 from "../problems/004.js";

test("Problem 4", () => equal(problem004(), "Problem 4 solution is: 906609"));
