import React from 'react'

interface Props {

}

const Footer = (props: Props) => {
  return (
    <footer className="container text-center my-5 fs-6">
      Built with <strong>Next.js</strong> and <strong>Bootstrap</strong>. Hosted on <strong>Vercel</strong>.<br />
      © Syed Taqi Haider. All Rights Reserved.
    </footer>
  )
}

export default Footer
