// @ts-nocheck
import fs from 'fs'
import path from 'path'
import type { PluginOption } from 'vite'
import type { ConfigOptions } from './typing'

let options = {}
const { resolve, join } = path
const { existsSync, readdirSync, statSync, unlinkSync, rmdirSync } = fs

function cleanFiles(dirPath) {
  if (existsSync(dirPath)) {
      if (statSync(dirPath).isDirectory()) {
          let files = readdirSync(dirPath);
          files.forEach((file) => {
              let path2 = join(dirPath, file);
              if (statSync(path2).isDirectory()) {
                  cleanFiles(path2);
                  rmdirSync(path2);
              } else {
                  unlinkSync(path2);
              }
          });
      } else {
          unlinkSync(dirPath);
      }
  }
}

const cleanPlugin = (_opt?: ConfigOptions): PluginOption => {
  options = Object.assign({
    targetFiles: ['dist']
  }, _opt)
  return {
    name: 'vite-plugin-clean',
    enforce: 'pre',
    apply: 'build',
    buildStart: (config) => {
      const { targetFiles } = options
      const rootDirectory = process.cwd()
      if(Array.isArray(targetFiles)) {
        for(let i = 0 , len = targetFiles.length; i < len; i++) {
          cleanFiles(resolve(rootDirectory, targetFiles[i]))
        }
      }else {
        cleanFiles(resolve(rootDirectory, targetFiles))
      }
    }
  }
}

export default cleanPlugin
