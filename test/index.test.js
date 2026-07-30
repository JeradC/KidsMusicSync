import test from "node:test";
import assert from "node:assert/strict";

import { createSyncPlan } from "../src/index.js";

test("createSyncPlan summarizes playlists", () => {
  const plan = createSyncPlan({
    familyName: "Carter",
    playlists: [
      { name: "Car", tracks: ["A", "B"] },
      { name: "Quiet", tracks: [] }
    ]
  });

  assert.equal(plan.familyName, "Carter");
  assert.equal(plan.playlistCount, 2);
  assert.deepEqual(plan.playlists, [
    { name: "Car", trackCount: 2 },
    { name: "Quiet", trackCount: 0 }
  ]);
});
