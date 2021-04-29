import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <div className='row'>
          <div className='card'>
            <div className='card-body'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout