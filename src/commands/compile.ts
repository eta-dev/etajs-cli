import type { Arguments, Options } from 'yargs'

import Eta = require('eta')

import * as fs from 'fs'

export default (testing: boolean): [string, string, Record<string, Options>, (args: Arguments) => string | void] => {
  return [
    'compile',
    'compile template into function',
    {
      cjs: {
        alias: 'c',
        default: true,
        type: 'boolean'
      },
      location: {
        alias: 'loc',
        type: 'string'
      }
    },
    (args) => {
      if (args.location == undefined) throw new Error('Missing required arguments')
      const template = fs.readFileSync(args.location as string).toString()

      const compiled = `${
        args.cjs === undefined || args.cjs === true ? 'module.exports=' : 'export default '
      }(it,E,cb)=>{${Eta.compileToString(template, Eta.defaultConfig)}}`

      if (testing) {
        return compiled
      } else {
        console.log(compiled)
      }
    }
  ]
}
