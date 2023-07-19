import { Project } from "@/app/types/Project";
import { createClient, groq } from "next-sanity";

export const getProjects = async (): Promise<Project[]> => {
  const client = createClient({
    projectId: "uulx709b",
    dataset: "production",
    apiVersion: "2023-07-19",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
};
