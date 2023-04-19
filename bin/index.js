#!/usr/bin/env node
import fs from 'fs'
import { hideBin, toSnakeCase, extractParam } from './utils.js'


const files = hideBin(process.argv)

const target = extractParam(files, '-i') || 'index.js'
const setExtention = extractParam(files, '-x')
const exportFolders = extractParam(files, '-f', true) || false
const exportDefaults = extractParam(files, '-d', true) || false

const result = {}

for (const filePath of files) {
  const parentPath = filePath.split('/').slice(0, -1).join('/')
  const fileName = filePath.split('/').slice(-1).join('/').split('.').slice(0, -1).join('.')
  const fileExtention = filePath.split('.').pop()
  const targetPath = `${parentPath}/${target}`
  const parentFolder = parentPath.split('/').slice(-1).join()
  const grandParentFolder = parentPath.split('/').slice(0, -1).join('/')
  const parentTargetPath = `${grandParentFolder}/${target}`

  const extention = setExtention || fileExtention || target.split('.').slice(-1).join()

  if (grandParentFolder && exportFolders) {
    result[parentTargetPath] ||= []
    result[parentTargetPath].unshift(`export * as ${toSnakeCase(parentFolder)} from './${parentFolder}/${target.split('.').slice(0,-1).join('.')}.${extention}'\n`)
  }

  if (fileName === target.split('.').slice(0, -1).join('.')) {
    continue
  }

  result[targetPath] ||= []
  result[targetPath].push(`export * from './${fileName}.${extention}'`)

  exportDefaults && 
    result[targetPath].push(`export { default as ${toSnakeCase(fileName)} } from './${fileName}.${extention}'`)
}

for (const targetPath in result) {
  const text = result[targetPath]
  fs.writeFileSync(targetPath, Array.from(new Set(text)).join('\n'))
}