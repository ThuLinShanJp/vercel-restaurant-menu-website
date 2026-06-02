/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// export default defineCliConfig({ api: { projectId, dataset } })

export default defineCliConfig({
  api: {
    projectId: "h4w2tsnf",
    dataset: "production",
  },
  deployment: {
    appId: "rmpvvm7zz8fgfhndohh4si4x",
  },
});
