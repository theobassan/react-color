import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

import { Swatch } from '../common'

export const CircleSwatch = ({ color, onClick, onSwatchHover, hover, active,
  circleSize, circleSpacing }) => {
  const styles = reactCSS({
    'default': {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: 'scale(1)',
        transition: '100ms transform ease',
      },
      Swatch: {
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: `inset 0 0 0 ${ circleSize / 2 }px ${ color }`,
        transition: '100ms box-shadow ease',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)',
      },
    },
    'active': {
      Swatch: {
        boxShadow: `inset 0 0 0 3px ${ color }`,
      },
    },
  }, { hover, active })

  return (
    <div style={ styles.swatch }>
      <Swatch
        style={ styles.Swatch }
        color={ color }
        onClick={ onClick }
        onHover={ onSwatchHover }
        focusStyle={{ boxShadow: `${ styles.Swatch.boxShadow }, 0 0 5px ${ color }` }}
      />
    </div>
  )
}

CircleSwatch.defaultProps = {
  circleSize: 22,
  circleSpacing: 10,
}

export default handleHover(CircleSwatch)
