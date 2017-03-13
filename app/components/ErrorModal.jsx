import React from 'react'

const ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    let modal = new Foundation.Reveal($('#errorModal'))
    modal.open()
  },
  render: function () {
    var {title, message} = this.props

    return (
      <div className='reveal text-center' id='errorModal' data-reveal=''>
        <h2>{title}</h2>
        <p>{message}</p>
        <button className='button hollow' data-close=''>
          Okey
        </button>
      </div>
    )
  }
})

module.exports = ErrorModal
