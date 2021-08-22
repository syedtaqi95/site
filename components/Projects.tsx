import Link from "next/link";
import React from "react";
import { useColorModeValue, Heading } from "@chakra-ui/react";

const Projects = () => {
  const hlColour = useColorModeValue("blue.600", "cyan.600");
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Heading
        pt={20}
        as="h2"
        color={hlColour}
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
      >
        Projects 🏆
      </Heading>
    </>
  );
};

{
  /* <section className="my-5" id="projects">
  <h1 className="text-center">Projects 🏆</h1>
  <p className="mt-5 text-center">
    Some of my publicly available projects can be viewed{" "}
    <Link href="/projects">
      <a>here</a>
    </Link>
    .
  </p>
</section>; */
}

export default Projects;
