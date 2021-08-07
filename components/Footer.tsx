import React from 'react'

interface Props {

}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="container text-center mb-4 fs-6">
        <hr />
        Built using Next.js and Bootstrap. Hosted on Github Pages.<br />
        © Syed Taqi Haider. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
