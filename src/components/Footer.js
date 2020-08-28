import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Amr Badawy{' '}
      <a href="https://github.com/kashik0i" className="icon fa-github">
        <span className="label">GitHub</span>
        GitHub
      </a>
      . Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a> &{' '}
      <a href="https://html5up.net">HTML5 UP</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
