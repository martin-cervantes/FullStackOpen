import React from 'react'

const Notification = ({ alert, message }) => {
  if (message === null) {
    return null
  }

  const error = {
    backgroundColor: '#f65757'
  }

  const info = {
    backgroundColor: '#2196F3'
  }

  return (
    <div className='alert' style={alert ? error : info}>
      {message}
    </div>
  )
}

export default Notification
