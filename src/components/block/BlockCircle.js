import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import merge from 'lodash/merge'
import color from '../../helpers/color'

import { ColorWrap, Checkboard } from '../common'
import CircleSwatch from './CircleSwatch'

export const BlockCircle = ({ onChange, onSwatchHover, hex, colors, width, triangle, styles: passedStyles = {}, className = '' }) => {
  const transparent = hex === 'transparent'
  const handleChange = (hexCode, e) => {
    if (color.isValidHex(hexCode)) {
      onChange({
        hex: hexCode,
        source: 'hex',
      }, e)
    }
  }

  const styles = reactCSS(merge({
    'default': {
      card: {
        width,
        background: '#fff',
        boxShadow: '0 1px rgba(0,0,0,.1)',
        borderRadius: '6px',
        position: 'relative',
        top: '-1px',
      },
      head: {
        height: '110px',
        background: hex,
        borderRadius: '6px 6px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
      body: {
        paddingTop: '10px',
        paddingLeft: '10px',
        borderStyle: 'solid',
        borderWidth: '0 1px 1px 1px',
        borderColor: 'rgba(0, 0, 0, 0.23)',
        borderRadius: '0 0 6px 6px',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      },
      triangleBigger: {
        position: 'absolute',
        borderWidth: '8px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent rgba(0, 0, 0, 0.23)',
        borderImage: 'initial',
        top: '-15px',
        left: '50%',
      },
      triangle: {
        position: 'absolute',
        borderWidth: '7px',
        borderStyle: 'solid',
        borderColor: `transparent transparent ${ hex } transparent`,
        borderImage: 'initial',
        top: '-13px',
        left: 'calc(50% + 1px)',
        zIndex: '1302',
      },
      triangle2: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 10px 10px 10px',
        borderColor: `transparent transparent ${ hex } transparent`,
        position: 'absolute',
        top: '-10px',
        left: '50%',
        marginLeft: '-10px',
      },
    },
    'hide-triangle': {
      triangle: {
        display: 'none',
      },
    },
  }, passedStyles), { 'hide-triangle': triangle === 'hide' })

  return (
    <div style={ styles.card } className={ `block-picker ${ className }` }>
      <div style={ styles.triangleBigger } />
      <div style={ styles.triangle } />

      <div style={ styles.head }>
        { transparent && (
          <Checkboard borderRadius="6px 6px 0 0" />
        ) }
      </div>

      <div style={ styles.body }>
        { map(colors, (c) => (
          <CircleSwatch
            key={ c }
            color={ c }
            onClick={ handleChange }
            onSwatchHover={ onSwatchHover }
            active={ hex === c.toLowerCase() }
          />
        )) }
      </div>
    </div>
  )
}

BlockCircle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  triangle: PropTypes.oneOf(['top', 'hide']),
  styles: PropTypes.object,
}

BlockCircle.defaultProps = {
  width: 170,
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555',
    '#dce775', '#ff8a65', '#ba68c8'],
  triangle: 'top',
  styles: {},
}

export default ColorWrap(BlockCircle)
