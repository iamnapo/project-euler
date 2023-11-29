import test from "node:test";
import { equal } from "node:assert/strict";

import problem099 from "../problems/099.js";

test("Problem 99", () => equal(problem099(), "Problem 99 solution is: 709"));
