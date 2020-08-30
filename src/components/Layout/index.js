import React from 'react'
import './index.less'

export default ({
  children,
}) => {

  return <div className="content-wrapper-style">
    <div className="modal-wrapper-style">
      {children}
    </div>
  </div>
}