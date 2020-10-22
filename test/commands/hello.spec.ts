import parse = require('yargs-parser')

import type { Arguments } from 'yargs'

import HelloCommand from '../../src/commands/hello'

let command: [string, string, any, (args: Arguments) => void]

describe('HelloCommand', () => {
  it('should be a function', () => {
    expect(typeof HelloCommand).toBe('function')
  })
  it('should call without crashing', () => {
    command = HelloCommand(true)
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
      command[3](parse('--name Eta'))
    })
  })
})
