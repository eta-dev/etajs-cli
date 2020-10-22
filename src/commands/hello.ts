import type { Arguments } from 'yargs'

export default (testing: boolean): [string, string, any, (args: Arguments) => string | void] => {
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
