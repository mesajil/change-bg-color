const defaultColor = '#000000'

// Convert RGB color to Hexadecimal
const rgbToHex = (rgb: string | undefined) => {
  const result = rgb?.match(/\d+/g)
  if (result && result.length >= 3) {
    const r = parseInt(result[0]).toString(16).padStart(2, '0')
    const g = parseInt(result[1]).toString(16).padStart(2, '0')
    const b = parseInt(result[2]).toString(16).padStart(2, '0')
    return `#${r}${g}${b}`
  }

  // if parsing fails, return default color
  return defaultColor
}

// Convert Hex color to RGB
const hexToRgb = (hex: string): string => {
  const normalizedHex = hex.replace('#', '')
  const bigint = parseInt(normalizedHex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgb(${r}, ${g}, ${b})`
}

export { defaultColor, rgbToHex, hexToRgb }
