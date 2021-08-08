import React from 'react'
import { Icon } from '@iconify/react'

const Skills = () => {
  return (
    <section className="mt-5">
      <h1 className="text-center">Skills</h1>

      <h4 className="mt-5">Programming languages</h4>
      <p className="text-center mx-5">
        HTML5 | CSS3 | JavaScript (ES6) | TypeScript | Python | C | C++
      </p>
      <p className="text-center mx-5">
        <Icon icon="logos:html-5" inline={true} height="4em" />{' '}
        <Icon icon="logos:css-3" inline={true} height="4em" />{' '}
        <Icon icon="logos:javascript" inline={true} height="4em" />{' '}
        <Icon icon="logos:typescript-icon" inline={true} height="4em" />{' '}
        <Icon icon="logos:python" inline={true} height="4em" />{' '}
        <Icon icon="logos:c" inline={true} height="4em" />{' '}
        <Icon icon="logos:c-plusplus" inline={true} height="4em" />
      </p>

      <h4 className="mt-5">Frameworks, Tools & Libraries</h4>
      <p className="text-center mx-5">
        React | Next.js | Bootstrap | Redux | Node.js | Express | Flask | GraphQL | MongoDB |
        Tensorflow | ESLint | Jest | Cypress | Git | Github Actions | Visual Studio Code
      </p>
      <p className="text-center mx-5">
        <Icon icon="logos:react" inline={true} height="3em" />{' '}
        <Icon icon="logos:nextjs" inline={true} height="3em" />{' '}
        <Icon icon="logos:bootstrap" inline={true} height="3em" />{' '}
        <Icon icon="logos:redux" inline={true} height="3em" />{' '}
        <Icon icon="logos:nodejs" inline={true} height="3em" />{' '}
        <Icon icon="logos:express" inline={true} height="3em" />{' '}
        <Icon icon="logos:flask" inline={true} height="3em" />{' '}
        <Icon icon="logos:graphql" inline={true} height="3em" />{' '}
        <Icon icon="logos:mongodb" inline={true} height="3em" />{' '}
        <Icon icon="logos:tensorflow" inline={true} height="3em" />{' '}
        <Icon icon="logos:eslint" inline={true} height="3em" />{' '}
        <Icon icon="logos:jest" inline={true} height="3em" />{' '}
        <Icon icon="logos:cypress" inline={true} height="3em" />{' '}
        <Icon icon="logos:git" inline={true} height="3em" />{' '}
        <Icon icon="logos:github-icon" inline={true} height="3em" />{' '}
        <Icon icon="logos:visual-studio-code" inline={true} height="3em" />{' '}
      </p>

      <h4 className="mt-5">Project Management</h4>
      <p className="text-center mx-5">
        Agile | Scrum | Jira
      </p>
      <p className="text-center mx-5">
        <Icon icon="simple-icons:scrumalliance" inline={true} height="3em" />{' '}
        <Icon icon="logos:jira" inline={true} height="3em" />{' '}
      </p>
      <hr />
    </section>
  )
}

export default Skills