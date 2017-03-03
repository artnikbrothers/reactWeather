import React from 'react'
import Nav from 'Nav'

const Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Hello world!</h2>
      {props.children}
    </div>
  )
}

module.exports = Main
