import type { Arguments, Options } from 'yargs'

export default (testing: boolean): [string, string, Record<string, Options>, (args: Arguments) => string | void] => {
  return [
    'hello',
    'say hello',
    {
      name: {
        alias: 'n',
        default: 'Eta'
      }
    },
    (args) => {
      if (testing) {
        return `Hello ${args.name}!`
      } else {
        console.log(`Hello ${args.name}!`)
      }
    }
  ]
}
