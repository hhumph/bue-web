import fetch from "cross-fetch";
import { createClient } from "sanity-codegen";
import { Documents } from "@generated/schema";

export default createClient<Documents>({
  projectId: "obnhn7mx", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  fetch,
});
