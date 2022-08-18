import React from 'react'

const Error = () => {

  const style = {
    error: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }

  return (
    <div style={style.error}>
      <h1>Error!</h1>
      <h1>Page not found</h1>
    </div>
  )
}

export default Error
