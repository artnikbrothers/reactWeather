import React from 'react'
import {Link, IndexLink} from 'react-router'

const Nav = (props) => {
  return (
    <div>
      <h2>Main menu!</h2>
      <IndexLink to={'/'} activeClassName='active' activeStyle={{fontWeight: 'bold', color: 'red'}}>Weather</IndexLink>
      <Link to={'/about'} activeClassName='active' activeStyle={{fontWeight: 'bold', color: 'red'}}>About</Link>
      <Link to={'/examples'} activeClassName='active' activeStyle={{fontWeight: 'bold', color: 'red'}}>Examples</Link>
    </div>
  )
}

module.exports = Nav
