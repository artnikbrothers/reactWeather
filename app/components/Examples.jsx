import React from 'react'
import {Link} from 'react-router'

const Examples = (props) => {
  return (
    <div>
      <h2 className='text-center page-title'>Examplesss</h2>
      <ol>
        <li>
          <Link to='/?location=london'>London, UK</Link>
        </li>
        <li>
          <Link to='/?location=Uzhhorod'>Uzhhorod, UA</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples
