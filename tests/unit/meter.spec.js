import {getColor} from '@/components/Meter/methods.js'
import * as data from '@/components/Meter/data.js'

describe('Meter data tests', () => {
  it('all RGB default colors values should be a proper type', () => {
    const defaultColors = data.colorModes.default
    const porperType = 'number'

    for (let light in defaultColors) {
      expect(typeof defaultColors[light]).toBe(porperType)
    }
  })
})

describe('Meter methods tests', () => {
  it('returns RGB code for "default" color mode', () => {
    const rotation = 100
    const colorMode = 'default'
    
    const color = getColor(rotation, colorMode)
    
    expect(color).toBe(`rgb(${data.colorModes.default.red},${data.colorModes.default.green},${data.colorModes.default.blue})`)
  })

  it('returns RGB code for "color" color mode - angle < 180', () => {
    const rotation = 50
    const colorMode = 'color'
    const properColors = {
      r: 255,
      g: 71,
      b: 0
    }
  
    const color = getColor(rotation, colorMode)
    
    expect(color).toBe(`rgb(${properColors.r},${properColors.g},${properColors.b})`)
  })

  it('returns RGB code for "color" color mode - angle > 180', () => {
    const rotation = 255
    const colorMode = 'color'
    const properColors = {
      r: 149,
      g: 255,
      b: 0
    }
  
    const color = getColor(rotation, colorMode)
    
    expect(color).toBe(`rgb(${properColors.r},${properColors.g},${properColors.b})`)
  })
})
