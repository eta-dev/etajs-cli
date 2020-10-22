import parse = require('yargs-parser')

import type { Arguments } from 'yargs'

import CompileCommand from '../../src/commands/compile'

let command: [string, string, any, (args: Arguments) => void]

describe('HelloCommand', () => {
  it('should be a function', () => {
    expect(typeof CompileCommand).toBe('function')
  })
  it('should call without crashing', () => {
    command = CompileCommand(true)
  })
  describe('#metadata', () => {
    it('should have a name', () => {
      expect(command[0] != undefined)
      expect(typeof command[0]).toBe('string')
    })
    it('should have a description', () => {
      expect(command[1] != undefined)
      expect(typeof command[0]).toBe('string')
    })
    it('should have a builder', () => {
      expect(command[2] != undefined)
      expect(typeof command[2]).toBe('object')
    })
  })
  describe('.callback', () => {
    it('should output correctly', () => {
      const output = command[3](parse('--location ./test/commands/fixtures/test.eta'))
      expect(output).toBe(
        `module.exports=(it,E,cb)=>{var tR='',__l,__lP,include=E.include.bind(E),includeFile=E.includeFile.bind(E)\nfunction layout(p,d){__l=p;__lP=d}\ntR+='Hello '\ntR+=E.e(it.name)\nif(__l)tR=includeFile(__l,Object.assign(it,{body:tR},__lP))\nif(cb){cb(null,tR)} return tR}`
      )
    })
    it('should throw an error', () => {
      expect(() => command[3](parse(''))).toThrowError('Missing required arguments')
    })
  })
})
