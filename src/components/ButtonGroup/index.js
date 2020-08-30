import React from 'react'
import isArray from 'lodash/isArray'
import get from 'lodash/get'
import { Button } from 'antd'

import './index.less'

const ButtonGroup = ({
  content,
  children
}) => {
  if (children) {
    return children
  }

  return isArray(content) ? <div className="button-group-style">
    {
      content.map((item, index) => {
        const options = get(item, 'options')
        const label = get(item, 'label')

        return <Button
          className="button-style"
          key={index}
          {
            ...options
          }
        >
          {label}
        </Button>
      })
   }
  </div> : null
}

export default ButtonGroup