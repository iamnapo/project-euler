import test from "node:test";
import { equal } from "node:assert/strict";

import problem002 from "../problems/002.js";

test("Problem 2", () => equal(problem002(), "Problem 2 solution is: 4613732"));
