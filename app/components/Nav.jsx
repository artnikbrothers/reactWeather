import React from 'react'
import {Link, IndexLink} from 'react-router'

const Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault()
    console.log(this.refs.location.value)
  },
  render: function () {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>React weather app</li>
            <li>
              <IndexLink to={'/'} activeClassName='active' activeStyle={{fontWeight: 'bold', color: 'red'}}>Weather</IndexLink>
            </li>
            <li>
              <Link to={'/about'} activeClassName='active' activeStyle={{fontWeight: 'bold', color: 'red'}}>About</Link>
            </li>
            <li>
              <Link to={'/examples'} activeClassName='active' activeStyle={{fontWeight: 'bold', color: 'red'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSearch}>
            <ul className='menu'>
              <li>
                <input type='search' placeholder='Search wearther by city' ref='location' />
              </li>
              <li>
                <button type='submit' className='button'>Search</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Nav
