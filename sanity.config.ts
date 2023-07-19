import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export default defineConfig({
  projectId: "uulx709b",
  dataset: "production",
  apiVersion: "2023-07-19",
  title: "Personal Website",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});
