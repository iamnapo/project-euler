import test from "node:test";
import { equal } from "node:assert/strict";

import problem500 from "../problems/500.js";

test("Problem 500", () => equal(problem500(), "Problem 500 solution is: 35407281"));
