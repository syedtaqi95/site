import React from "react";
import {
  Heading,
  useColorModeValue,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import SkillIcon from "./SkillIcon";
import { programmingLanguages, libraries, frameworks } from "../content/data";

const Skills = () => {
  const hlColour = useColorModeValue("blue.600", "cyan.600");
  const bg = useColorModeValue("gray.300", "gray.700")

  return (
    <>
      <Heading
        as="h2"
        color={hlColour}
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
      >
        Skills 🔧
      </Heading>

      <Box
        bg={bg}
        px={{ base: 4, sm: 8 }}
        py={{ base: 6, sm: 12 }}
        w={{ base: "100%", sm: "md", md: "2xl" }}
        borderRadius={20}
      >
        <Flex justify="space-around">
          {programmingLanguages.map((skill) => (
            <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </Flex>
        <br />
        <Flex justify="space-around">
          {frameworks.map((skill) => (
            <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </Flex>
        <br />
        <Flex justify="space-around">
          {libraries.map((skill) => (
            <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </Flex>
      </Box>
    </>

    // <section className="mt-5">
    //   <h1 className="text-center my-5">Skills 🔧</h1>

    //   <h3 className="my-5">Programming languages</h3>
    //   <p className="text-center">
    //     HTML5 | CSS3 | JavaScript (ES6) | TypeScript | Python | C | C++
    //   </p>
    //   <p className="d-flex justify-content-around">
    //     <Icon icon="logos:html-5" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:css-3" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:javascript" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:typescript-icon" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:python" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:c" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:c-plusplus" inline={true} height="3em" />
    //   </p>

    //   <h3 className="my-5">Frameworks, Tools & Libraries</h3>
    //   <p className="text-center">
    //     React | Next.js | Bootstrap | Redux | Node.js | Express | Flask | GraphQL | MongoDB |
    //     Tensorflow | ESLint | Jest | Cypress | Git | Github Actions | Visual Studio Code
    //   </p>
    //   <p className="d-flex justify-content-around">
    //     <Icon icon="logos:react" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:nextjs" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:bootstrap" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:redux" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:nodejs" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:express" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:flask" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:graphql" inline={true} height="3em" />
    //   </p>
    //   <p className="d-flex justify-content-around">
    //     <Icon icon="logos:mongodb" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:tensorflow" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:eslint" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:jest" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:cypress" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:git" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:github-icon" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:visual-studio-code" inline={true} height="3em" />
    //   </p>

    //   <h3 className="my-5">Project Management</h3>
    //   <p className="text-center">
    //     Agile | Scrum | Jira
    //   </p>
    //   <p className="d-flex justify-content-around">
    //     <Icon icon="simple-icons:scrumalliance" inline={true} height="3em" />{' '}
    //     <Icon icon="logos:jira" inline={true} height="3em" />{' '}
    //   </p>
    //   <hr />
    // </section>
  );
};

export default Skills;
