import fs from 'fs'
import path from 'path'
import type { Plugin } from 'vite'
import type { ConfigOptions } from './typing'

const { resolve, join } = path
const { existsSync, readdirSync, statSync, unlinkSync, rmdirSync } = fs

function cleanFiles(dirPath: string) {
  if (existsSync(dirPath)) {
    if (statSync(dirPath).isDirectory()) {
      let files = readdirSync(dirPath)
      files.forEach(file => {
        let curPath = join(dirPath, file)
        if (statSync(curPath).isDirectory()) {
          cleanFiles(curPath)
          rmdirSync(curPath)
        } else {
          unlinkSync(curPath)
        }
      })
    } else {
      unlinkSync(dirPath)
    }
  }
}

const cleanPlugin = (options?: ConfigOptions): Plugin => ({
  name: 'vite-plugin-clean',
  enforce: 'pre',
  apply: 'build',
  buildStart: () => {
    const target = options?.targetFiles || ['dist']
    const targets = Array.isArray(target) ? target : [target]

    targets.forEach(dir => {
      const dirPath = resolve(process.cwd(), dir)
      cleanFiles(dirPath)
    })
  }
})

export default cleanPlugin
