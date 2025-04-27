import { equal } from "node:assert/strict";
import test from "node:test";

import problem123 from "../problems/123.js";

test("Problem 123", () => equal(problem123(), "Problem 123 solution is: 21035"));
