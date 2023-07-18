import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
  projectId: "uulx709b",
  dataset: "production",

  title: "Personal Website",

  basePath: "/admin",

  plugins: [deskTool()],
});
