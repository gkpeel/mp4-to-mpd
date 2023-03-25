import React from 'react'

const Title = props => {
  const {
    tag,
    className,
    children
  } = props;
  return React.createElement(tag, {className}, children)
}

export default Title;
