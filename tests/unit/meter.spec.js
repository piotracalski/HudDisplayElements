import {getColor} from '@/components/Meter/methods.js'
import * as data from '@/components/Meter/data.js'

describe('Meter component - methods', () => {
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
