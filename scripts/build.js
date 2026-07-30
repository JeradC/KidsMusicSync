import { mkdir, writeFile } from "node:fs/promises";
import { createSyncPlan } from "../src/index.js";

const samplePlan = createSyncPlan({
  familyName: "Sample Family",
  playlists: [
    { name: "Morning", tracks: ["Wake Up", "Brush Teeth"] },
    { name: "Bedtime", tracks: ["Pajamas", "Story Song", "Goodnight"] }
  ]
});

await mkdir("dist", { recursive: true });
await writeFile("dist/sample-plan.json", `${JSON.stringify(samplePlan, null, 2)}\n`);

console.log("Built dist/sample-plan.json");
