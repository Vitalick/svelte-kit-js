function hexToRgb(hex) {
  if (hex[0] === '#') {
    hex = hex.slice(1)
  }

  const R = parseInt(hex.substring(0, 2), 16)
  const G = parseInt(hex.substring(2, 4), 16)
  const B = parseInt(hex.substring(4, 6), 16)
  return [R, G, B]
}

function rgbToHex(r, g, b) {
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b
    .toString(16)
    .padStart(2, '0')}`
}

function hslToRgb(h, s, l) {
  let r, g, b

  if (s == 0) {
    r = g = b = l // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s
    let p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    let d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  return [h, s, l]
}

module.exports = function colorReplace(hex) {
  const [r, g, b] = hexToRgb(hex)
  const baseLightness = 500
  const outObject = {}
  const hslColor = rgbToHsl(r, g, b)
  for (const nowLightness of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]) {
    const nowLightness2 = nowLightness - baseLightness
    const nowPercent = nowLightness2 / baseLightness
    outObject[nowLightness] = rgbToHex(
      ...hslToRgb(hslColor[0], hslColor[1], hslColor[2] - hslColor[2] * nowPercent)
    )
  }
  return outObject
}
