import { getProjects } from "@/sanity/sanity-utils";

export default function Home() {
  const projects = getProjects();
  return <div>project go here</div>;
}
