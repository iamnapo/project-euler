import test from "node:test";
import { equal } from "node:assert/strict";

import problem012 from "../problems/012.js";

test("Problem 12", () => equal(problem012(), "Problem 12 solution is: 76576500"));
