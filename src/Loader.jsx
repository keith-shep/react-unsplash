import React from 'react'

const Loader = () => {
  return (
      <div className="position-fixed top-50 start-50 translate-middle" style={{zIndex: 5}}>
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>      
  )
}

export default Loader
