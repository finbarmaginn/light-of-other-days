import React from 'react'

const Footer = () => {
  let date = new Date()
  return (
    <footer>
      <section>
        <p>
          Photographs by Jim Maginn
          <br />
          Copyright &copy; {date.getFullYear()}
        </p>
      </section>
    </footer>
  )
}


export default Footer