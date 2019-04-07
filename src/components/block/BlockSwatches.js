import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'

import { Swatch } from '../common'

export const BlockSwatches = ({ colors, onClick, onSwatchHover }) => {
  const styles = reactCSS({
    'default': {
      swatches: {
        marginRight: '-10px',
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
      clear: {
        clear: 'both',
      },
    },
  })

  return (
    <div style={ styles.swatches }>
      { map(colors, (c) => (
        <Swatch
          key={ c }
          color={ c }
          style={ styles.swatch }
          onClick={ onClick }
          onHover={ onSwatchHover }
          focusStyle={{
            boxShadow: `0 0 4px ${ c }`,
          }}
        />
      )) }
      <div style={ styles.clear } />
    </div>
  )
}

export default BlockSwatches
