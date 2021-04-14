const BROWSER_PREFIX = [/^webkit/, /^ms/, /^moz/]

export function toLowerCase (str) {
  return str
    .replace(/^[A-Z]/, match => match.toLowerCase())
    .replace(/[A-Z]/g, match => '_' + match.toLowerCase())
}

export function styleObjectToKebabCaseObject (json) {
  const result = {}
  for (let key in json) {
    if (BROWSER_PREFIX.some(o => {
      return o.test(key)
    })) {
      result['-' + key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)] = json[key]
    } else {
      result[key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)] = json[key]
    }
  }
  return result
}

export function parseValueToPixel (value) {
  if (!value) return undefined
  if (/[^0-9]/.test(value.toString())) {
    return value
  }
  return value + 'px'
}