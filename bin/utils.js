export function hideBin(argv) {
  return argv.slice(process.versions.electron ? 0 : 1 + 1);
}

export function toSnakeCase(text) {
  return text.replaceAll(/[\W_]+/g, '_')
}

export function extractParam(list, key, boolean = false) {
  const targetIndex = list.indexOf(key)
  let result
  if (targetIndex >= 0) {
    result = list[targetIndex + (boolean ? 0 : 1)]
    list.splice(targetIndex, boolean ? 1 : 2)
  }
  return result
}