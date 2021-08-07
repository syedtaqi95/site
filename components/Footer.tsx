import React from 'react'

interface Props {

}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="container text-center mb-4 fs-6">
        <hr />
        Built with <strong>Next.js</strong> and <strong>Bootstrap</strong>. Hosted on <strong>Vercel</strong>.<br />
        © Syed Taqi Haider. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
